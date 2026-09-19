/* Chengyu Clash - app logic
   AI integration point: set AI_CONFIG below to enable a real LLM backend
   (needs a small server proxy so the key never ships to the browser).
   Until then the Arena runs on a local scripted mock. */

const AI_CONFIG = {
  endpoint: "",   // e.g. "https://your-server.example/api/duel"
  apiKey: ""
};

const ROUNDS = 5;

/* Small, consistent line icons. Text labels remain visible for clarity. */
const ICON_NAMES = new Set([
  "draw", "quiz", "praise", "roast", "sarcasm", "play", "translate",
  "back", "hint", "check", "next", "reset", "chevron-down", "chevron-up",
  "heart", "me", "share"
]);

/* ---------------- Favorites (stored locally) ---------------- */

function getFavs() {
  try {
    const v = JSON.parse(localStorage.getItem("cc_favs") || "[]");
    return Array.isArray(v) ? v : [];
  }
  catch (e) { return []; }
}
function saveFavs(list) {
  localStorage.setItem("cc_favs", JSON.stringify(Array.isArray(list) ? list : []));
}
function isFav(ch) { return getFavs().includes(ch); }
function toggleFav(ch) {
  const list = getFavs();
  const i = list.indexOf(ch);
  if (i >= 0) list.splice(i, 1); else list.unshift(ch);
  saveFavs(list);
  return i < 0; // true if now favorited
}
function iconSvg(name) {
  if (!ICON_NAMES.has(name)) return "";
  return `<svg class="icon icon-${name}" aria-hidden="true" focusable="false"><use href="#icon-${name}"></use></svg>`;
}

/* ---- merge expansion pack + translations ---- */
IDIOMS.push(...NEW_IDIOMS);
Object.assign(IDIOM_ZH, IDIOM_ZH2);
Object.assign(CHAR_BREAKDOWN, CHAR_BREAKDOWN2);
Object.assign(CHAR_NOTES, CHAR_NOTES2);
IDIOMS.forEach(i => {
  if (!i.mode) i.mode = "argue";
  if (IDIOM_ZH[i.ch]) i.t = IDIOM_ZH[i.ch];
});

/* sarcasm mode: dual-use idioms that only turn venomous in context
   (moved OUT of argue so Roast stays purely negative) */
const SARCASM_IDS = {
  "无话可说": 1, "不敢苟同": 1, "一言难尽": 1,
  "甘拜下风": 2, "佩服佩服": 2, "大开眼界": 2, "受益匪浅": 2, "高瞻远瞩": 2,
  "敬谢不敏": 3, "好自为之": 3
};
IDIOMS.forEach(i => {
  if (SARCASM_IDS[i.ch]) { i.mode = "sarcasm"; i.level = SARCASM_IDS[i.ch]; }
});

const SARCASM_LEVELS = {
  1: { name: "Light Sip", zh: "微酸", desc: "Barely-there snark. Deniable.", color: "#5B8DEF" },
  2: { name: "Sharp Sass", zh: "毒舌", desc: "Compliments with fangs.", color: "#E9A13B" },
  3: { name: "Bone-deep Tea", zh: "阴到骨子里", desc: "Polite on the lips, fatal in the chest.", color: "#D8432F" }
};

function levelsFor(mode) {
  return mode === "praise" ? PRAISE_LEVELS : mode === "sarcasm" ? SARCASM_LEVELS : LEVELS;
}
function dotsFor(mode, level) {
  return "●".repeat(level) + "○".repeat(3 - level);
}

/* ---------------- Tabs ---------------- */

function showView(name) {
  ["draw", "quiz", "me", "favs", "privacy"].forEach(v => {
    const el = document.getElementById("view-" + v);
    if (el) el.classList.toggle("hidden", name !== v);
  });
  ["draw", "quiz", "me"].forEach(v => {
    const tab = document.getElementById("tab-" + v);
    if (!tab) return;
    const active = name === v || ((name === "favs" || name === "privacy") && v === "me");
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(name === v));
    tab.tabIndex = active ? 0 : -1;
  });
  if (name === "me") updateFavCount();
  if (name === "favs") renderFavs();
  // TEST_MODE lives in quiz.js which loads after app.js — skip on first paint
  if (name === "draw" && typeof TEST_MODE !== "undefined" && typeof updateDrawControls === "function") {
    updateDrawControls();
  }
}
document.getElementById("tab-draw").addEventListener("click", () => showView("draw"));
document.getElementById("tab-quiz").addEventListener("click", () => showView("quiz"));
document.getElementById("tab-me").addEventListener("click", () => showView("me"));
document.getElementById("btn-open-favs").addEventListener("click", () => showView("favs"));
document.getElementById("btn-favs-back").addEventListener("click", () => showView("me"));
document.getElementById("btn-open-privacy").addEventListener("click", () => showView("privacy"));
document.getElementById("btn-privacy-back").addEventListener("click", () => showView("me"));
document.querySelector(".tabbar").addEventListener("keydown", event => {
  const tabs = [
    document.getElementById("tab-draw"),
    document.getElementById("tab-quiz"),
    document.getElementById("tab-me")
  ];
  const current = tabs.indexOf(document.activeElement);
  if (current < 0) return;
  let next = current;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % tabs.length;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + tabs.length) % tabs.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = tabs.length - 1;
  else return;
  event.preventDefault();
  tabs[next].focus();
  tabs[next].click();
});

/* ---------------- Text-to-speech (system zh voice, free & offline) ---------------- */

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = 0.85;
  speechSynthesis.speak(u);
}

/* ---------------- Draw economy ----------------
   Draws are unlocked with Chengyu Tokens earned in the Quiz.
   COOKIE_COST and the wallet live in quiz.js. */

/* ---------------- Draw flow ---------------- */

let currentMode = null;
let drawn = [];   // hanzi drawn this session, no repeats until pool empties

document.querySelectorAll("#mode-select .mode-card").forEach(b =>
  b.addEventListener("click", () => enterMode(b.dataset.mode)));

function enterMode(mode) {
  currentMode = mode;
  drawn = [];
  const meta = {
    praise:  { name: "Compliment · 夸人" },
    argue:   { name: "Roast · 吵架" },
    sarcasm: { name: "Sarcasm · 阴阳怪气" }
  }[mode];
  document.getElementById("mode-label").textContent = meta.name;
  document.getElementById("mode-select").classList.add("hidden");
  document.getElementById("draw-room").classList.remove("hidden");
  document.getElementById("card-slot").innerHTML = "";
  updateDrawControls();
}

function backToModes() {
  currentMode = null;
  document.getElementById("draw-room").classList.add("hidden");
  document.getElementById("mode-select").classList.remove("hidden");
}
document.getElementById("btn-back").addEventListener("click", backToModes);

function updateDrawControls() {
  // free daily draws first, Tokens only after they are used up
  const free = (typeof freeDrawsLeft === "function") ? freeDrawsLeft() : 0;
  const broke = !TEST_MODE && free <= 0 &&
    (typeof getCookies !== "function" || getCookies() < COOKIE_COST);
  document.getElementById("btn-draw").classList.toggle("hidden", broke);
  document.getElementById("upsell").classList.toggle("hidden", !broke);
  if (!broke) {
    let pool = IDIOMS.filter(i => i.mode === currentMode && !drawn.includes(i.ch));
    if (!pool.length) { // pool exhausted this session — allow repeats
      drawn = [];
      pool = IDIOMS.filter(i => i.mode === currentMode);
    }
    const cost = TEST_MODE ? " · unlimited"
      : (free > 0 ? ` · free, ${free}/${FREE_DRAWS} left today` : ` · ${COOKIE_COST} Tokens`);
    document.getElementById("btn-draw").textContent =
      (drawn.length ? "Draw another" : "Draw a chengyu") + cost;
  }
}

document.getElementById("btn-draw").addEventListener("click", () => {
  if (!TEST_MODE) {
    if (freeDrawsLeft() > 0) recordFreeDraw();
    else if (!spendCookies(COOKIE_COST)) {
      updateDrawControls();
      return;
    }
  }

  let pool = IDIOMS.filter(i => i.mode === currentMode && !drawn.includes(i.ch));
  if (!pool.length) pool = IDIOMS.filter(i => i.mode === currentMode);
  const id = pool[Math.floor(Math.random() * pool.length)];
  drawn.push(id.ch);

  renderDrawnCard(id);
  const status = document.getElementById("draw-status");
  if (status) status.textContent = `Drew: ${id.ch}`;
  updateDrawControls();
});
document.getElementById("btn-upsell-quiz").addEventListener("click", () => showView("quiz"));

/* ---------------- Shared card rendering ---------------- */

function charStrip(id) {
  const parts = CHAR_BREAKDOWN[id.ch];
  if (!parts) return "";
  const tiles = parts.map(p => {
    const isName = /^[A-Z]/.test(p[1]) || p[1] === "li";
    return `<span class="char-tile"><b>${p[0]}</b><i${isName ? ' class="name-gloss" title="proper name · read as pinyin"' : ""}>${p[1]}</i></span>`;
  }).join("");
  const literal = parts.map(p => p[1]).join(" ");
  const note = CHAR_NOTES[id.ch] ? `<div class="char-note">${CHAR_NOTES[id.ch]}</div>` : "";
  return `<div class="char-row">${tiles}<div class="char-eq">${literal}</div>${note}</div>`;
}

function cardHTML(id) {
  const lv = levelsFor(id.mode)[id.level];
  const dots = dotsFor(id.mode, id.level);
  const detailId = `detail-${Array.from(id.ch).map(ch => ch.codePointAt(0).toString(16)).join("-")}`;
  const parts = CHAR_BREAKDOWN[id.ch] || [];
  const tiles = parts.map(p => {
    const isName = /^[A-Z]/.test(p[1]) || p[1] === "li";
    return `<div class="hz-tile"><b>${p[0]}</b><i${isName ? ' class="name-gloss" title="proper name · read as pinyin"' : ""}>${p[1]}</i></div>`;
  }).join("");
  const d = DIALOGUES[id.ch];
  const literal = parts.map(p => p[1]).join(" ");
  const example = d ? `
        <span class="txt-en">${d[2] || id.exEn || ""}</span>
        <span class="txt-zh">${id.ex}</span>` : `
        <span class="txt-en">${id.exEn || ""}</span>
        <span class="txt-zh">${id.ex}</span>`;
  const liveRound = d ? `
        <div class="dialogue">
          <div class="dlg-line"><span class="txt-en">${d[1]}</span><span class="txt-zh">${d[0]}</span></div>
          <div class="dlg-line reply"><span class="txt-en">${d[2] || id.exEn || ""}</span><span class="txt-zh">${id.ex}</span></div>
        </div>` : "";
  return `
    <div class="card-ribbon">
      <span class="ribbon-level"><span class="txt-en">${dots} Lv${id.level} · ${lv.name}</span><span class="txt-zh">${dots} Lv${id.level} · ${lv.zh}</span></span>
      <span class="ribbon-tools">
        <button class="fav-btn${isFav(id.ch) ? " active" : ""}" type="button" aria-pressed="${isFav(id.ch)}" aria-label="Save to favorites · 收藏" title="Save to favorites · 收藏">${iconSvg("heart")}</button>
        <button class="share-btn" type="button" aria-label="Share this card · 分享卡片" title="Share this card · 分享卡片">${iconSvg("share")}</button>
        <button class="tts-btn" type="button" title="Hear it in Chinese" aria-label="Hear it in Chinese · 听中文发音">${iconSvg("play")}<span>Play</span></button>
        ${id.t ? `<button class="translate-btn" type="button" title="翻译成中文" aria-label="Show Chinese translation · 显示中文翻译">${iconSvg("translate")}<span>译</span></button>` : ""}
      </span>
    </div>
    <div class="card-body">
      ${tiles ? `<div class="hz-tiles">${tiles}</div>` : `<div class="hanzi">${id.ch}</div>`}
      <div class="pinyin-line">${id.py}</div>
      <div class="en txt-en">${id.en}</div>
      <div class="en txt-zh">${id.t ? id.t.en : ""}</div>
      <div class="core-example">
        <span class="label lbl-en">Example</span><span class="label lbl-zh">例句</span>
        ${example}
      </div>
      <span class="level-badge txt-en">Lv${id.level} · ${lv.name}</span><span class="level-badge txt-zh">Lv${id.level} · ${lv.zh}</span>
      <button class="learn-more" type="button" aria-expanded="false" aria-controls="${detailId}">
        ${iconSvg("chevron-down")} <span>Learn more</span> <span class="zh-sub" lang="zh-CN">展开</span>
      </button>
      <div id="${detailId}" class="detail">
        <div class="detail-inner">
        <div>
          <span class="label lbl-en">How to deploy it</span><span class="label lbl-zh">使用场景</span>
          <span class="txt-en">${id.usage || id.en}</span><span class="txt-zh">${id.t ? id.t.usage : ""}</span>
        </div>
        <div>
          <span class="label lbl-en">Live round</span><span class="label lbl-zh">实战例句</span>
          ${liveRound}
          <div class="lit-words">${literal}</div>
        </div>
        ${CHAR_NOTES[id.ch] ? `<div class="char-note">${CHAR_NOTES[id.ch]}</div>` : ""}
        ${(id.warn || (id.t && id.t.warn)) ? `
        <div>
          <span class="label lbl-en">Handle with care</span><span class="label lbl-zh">慎用提示</span>
          <span class="warn txt-en">${id.warn}</span><span class="warn txt-zh">${id.t ? id.t.warn : ""}</span>
        </div>` : ""}
        </div>
      </div>
    </div>`;
}

function wireCard(card) {
  const fav = card.querySelector(".fav-btn");
  if (fav) fav.addEventListener("click", () => {
    const added = toggleFav(card.dataset.ch);
    fav.classList.toggle("active", added);
    fav.setAttribute("aria-pressed", String(added));
    updateFavCount();
    if (!added) renderFavs(); // un-favoriting from the Favorites list removes it there
  });
  const tts = card.querySelector(".tts-btn");
  if (tts) tts.addEventListener("click", () => {
    speak(card.dataset.ch);
  });
  const share = card.querySelector(".share-btn");
  if (share) share.addEventListener("click", () => {
    const id = IDIOMS.find(i => i.ch === card.dataset.ch);
    if (id) shareCardImage(id, share);
  });
  const btn = card.querySelector(".translate-btn");
  if (btn) btn.addEventListener("click", () => {
    card.classList.toggle("zh");
    const zh = card.classList.contains("zh");
    btn.innerHTML = `${iconSvg("translate")}<span>${zh ? "EN" : "译"}</span>`;
    btn.title = zh ? "Switch back to English" : "翻译成中文";
    btn.setAttribute("aria-label", zh
      ? "Show English translation · 显示英文翻译"
      : "Show Chinese translation · 显示中文翻译");
  });
  const learn = card.querySelector(".learn-more");
  if (learn) learn.addEventListener("click", () => {
    const expanded = !card.classList.contains("open");
    card.classList.toggle("open", expanded);
    learn.setAttribute("aria-expanded", String(expanded));
    learn.innerHTML = expanded
      ? `${iconSvg("chevron-up")} <span>Show less</span> <span class="zh-sub" lang="zh-CN">收起</span>`
      : `${iconSvg("chevron-down")} <span>Learn more</span> <span class="zh-sub" lang="zh-CN">展开</span>`;
  });
}

function renderDrawnCard(id) {
  const slot = document.getElementById("card-slot");
  slot.innerHTML = "";
  const card = document.createElement("div");
  card.className = `idiom-card lv${id.level} drawn`;
  card.dataset.ch = id.ch;
  card.innerHTML = cardHTML(id);
  wireCard(card);
  slot.appendChild(card);
}

/* ---------------- Favorites list (own page) ---------------- */

function updateFavCount() {
  const el = document.getElementById("fav-count");
  if (el) el.textContent = String(getFavs().length);
}

function renderFavs() {
  const list = document.getElementById("fav-list");
  if (!list) return;
  const favs = getFavs()
    .map(ch => IDIOMS.find(i => i.ch === ch))
    .filter(Boolean);
  if (!favs.length) {
    list.innerHTML = '<p class="fav-empty">Nothing saved yet — tap the ♥ on any card to keep it here.</p>';
    return;
  }
  list.innerHTML = "";
  favs.forEach(id => {
    const card = document.createElement("div");
    card.className = `idiom-card lv${id.level} fav-card`;
    card.dataset.ch = id.ch;
    card.innerHTML = cardHTML(id);
    wireCard(card);
    list.appendChild(card);
  });
  updateFavCount();
}

/* ---------------- Share card as image ---------------- */

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";
  text.split(/\s+/).forEach(word => {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = test;
  });
  if (line) lines.push(line);
  return lines;
}

function cRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

const CJK_FONT = '"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
const LAT_FONT = '"Nunito","Segoe UI",system-ui,sans-serif';

function drawShareCard(id) {
  const W = 1080, H = 1440;
  const cv = document.createElement("canvas");
  cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d");
  const lv = levelsFor(id.mode)[id.level];
  const parts = CHAR_BREAKDOWN[id.ch] || [];
  const d = DIALOGUES[id.ch];
  let example = (d ? (d[2] || id.exEn) : id.exEn) || id.ex || "";
  const usage = (id.usage || id.en || "").trim();

  /* paper background + frame */
  ctx.fillStyle = "#FBF4E6";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "rgba(200,64,46,.16)";
  ctx.lineWidth = 3;
  cRoundRect(ctx, 36, 36, W - 72, H - 72, 48);
  ctx.stroke();

  /* seal + brand */
  ctx.fillStyle = "#C8402E";
  cRoundRect(ctx, 64, 64, 100, 100, 24);
  ctx.fill();
  ctx.fillStyle = "#FFF6E8";
  ctx.font = "700 62px " + CJK_FONT;
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText("成", 114, 118);
  ctx.fillStyle = "#2E241D";
  ctx.font = "900 34px " + LAT_FONT;
  ctx.textAlign = "right";
  ctx.fillText("Chengyu Clash", W - 70, 116);

  /* level pill */
  const dots = "●".repeat(id.level) + "○".repeat(3 - id.level);
  const pillText = dots + "  Lv" + id.level + " · " + lv.name;
  ctx.font = "800 30px " + LAT_FONT;
  const pw = ctx.measureText(pillText).width + 64;
  ctx.fillStyle = lv.color || "#C8402E";
  cRoundRect(ctx, (W - pw) / 2, 218, pw, 58, 29);
  ctx.fill();
  ctx.fillStyle = "#FFF6E8";
  ctx.textAlign = "center";
  ctx.fillText(pillText, W / 2, 248);

  /* hanzi tiles */
  const n = Math.min(parts.length, 4);
  const tile = 210, gap = 26;
  const x0 = (W - (n * tile + (n - 1) * gap)) / 2;
  parts.slice(0, n).forEach((p, i) => {
    const x = x0 + i * (tile + gap);
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "rgba(46,36,29,.12)";
    ctx.lineWidth = 2.5;
    cRoundRect(ctx, x, 318, tile, tile, 34);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#2E241D";
    ctx.font = "700 118px " + CJK_FONT;
    ctx.fillText(p[0], x + tile / 2, 318 + tile / 2 + 6);
    ctx.fillStyle = "#A93021";
    ctx.font = "800 26px " + LAT_FONT;
    ctx.fillText(p[1], x + tile / 2, 318 + tile + 40);
  });

  /* pinyin + natural meaning */
  ctx.fillStyle = "#8A7A66";
  ctx.font = "800 34px " + LAT_FONT;
  ctx.fillText(id.py, W / 2, 640);
  ctx.fillStyle = "#2E241D";
  ctx.font = "800 46px " + LAT_FONT;
  wrapText(ctx, id.en, 940).slice(0, 2).forEach((line, i) => {
    ctx.fillText(line, W / 2, 715 + i * 62);
  });

  /* usage box: "USE IT WHEN" (hidden when no distinct usage text) */
  const hasUsage = usage && usage !== id.en.trim();
  ctx.textAlign = "left";
  if (hasUsage) {
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "rgba(46,36,29,.08)";
    ctx.lineWidth = 2;
    cRoundRect(ctx, 80, 850, W - 160, 230, 32);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#B4A78F";
    ctx.font = "900 22px " + LAT_FONT;
    ctx.textAlign = "left";
    ctx.fillText("U S E   I T   W H E N", 120, 910);
    ctx.fillStyle = "#5C4E3E";
    ctx.font = "700 31px " + LAT_FONT;
    wrapText(ctx, usage, 850).slice(0, 3).forEach((line, i) => {
      ctx.fillText(line, 120, 962 + i * 44);
    });
  }

  /* example box: EN + original Chinese */
  const exY = hasUsage ? 1100 : 900;
  const exH = hasUsage ? 210 : 300;
  ctx.fillStyle = "#FFF9F0";
  ctx.strokeStyle = "rgba(233,161,59,.35)";
  cRoundRect(ctx, 80, exY, W - 160, exH, 32);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = "#B4A78F";
  ctx.font = "900 22px " + LAT_FONT;
  ctx.fillText("E X A M P L E", 120, exY + 58);
  ctx.fillStyle = "#5C4E3E";
  ctx.font = "700 29px " + LAT_FONT;
  const enLines = wrapText(ctx, example, 850).slice(0, 3);
  enLines.forEach((line, i) => {
    ctx.fillText(line, 120, exY + 106 + i * 40);
  });
  if (id.ex) {
    ctx.fillStyle = "#8A7A66";
    ctx.font = "600 27px " + CJK_FONT;
    const zhLine = wrapText(ctx, id.ex, 850)[0];
    if (zhLine) ctx.fillText(zhLine, 120, exY + 106 + enLines.length * 40 + 10);
  }

  /* footer: slogan + site */
  ctx.fillStyle = "#B4A78F";
  ctx.font = "700 26px " + LAT_FONT;
  ctx.textAlign = "center";
  ctx.fillText("Stop memorizing idioms. Start using them.", W / 2, 1332);
  ctx.fillStyle = "#C8402E";
  ctx.font = "900 30px " + LAT_FONT;
  ctx.fillText("chengyu.bbroot.com", W / 2, 1378);

  return cv.toDataURL("image/png");
}

async function shareCardImage(id, btn) {
  const dataUrl = drawShareCard(id);
  const filename = "chengyu-" + id.ch + ".png";

  /* native app: write to cache + system share sheet */
  if (window.__nativeShareImage) {
    try { await window.__nativeShareImage(dataUrl, filename); } catch (e) { /* user cancelled */ }
    return;
  }

  /* mobile / desktop browsers with Web Share API */
  try {
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], filename, { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: "Chengyu Clash", text: id.ch + " — " + id.en });
      return;
    }
  } catch (e) { if (e && e.name === "AbortError") return; /* share cancelled */ }

  /* last resort: download the image */
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

/* Chengyu Token Quiz engine lives in quiz.js */

/* ---------------- init ---------------- */
showView("draw");
if (AI_CONFIG.endpoint) {
  document.getElementById("io-note").textContent = "AI mode: live backend";
}

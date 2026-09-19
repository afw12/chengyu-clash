/* Chengyu Token Quiz — earn Tokens, unlock draws.
   Easy: multiple choice (+1 Token) · Hard: rebuild the literal image (+2 Tokens).
   Set TEST_MODE to false before launch to restore daily limits and draw costs. */

const TEST_MODE = true;  // testing: unlimited quiz/draws, no Token spending
const COOKIE_COST = 2;   // Tokens to unlock one draw after the free daily draws are used
const FREE_DRAWS = 5;    // free draws per day, per user, before Tokens are charged
const QUIZ_DAILY = 5;    // total quiz rounds per day, shared across both difficulties

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* ---------------- wallet ---------------- */

function getCookies() {
  const n = parseInt(localStorage.getItem("cc_cookies") || "0", 10);
  // non-negative, integer-capped: tampered/huge wallet values can't break the draw flow
  return Number.isFinite(n) && n > 0 ? Math.min(n, 9999) : 0;
}
function setCookies(n) {
  localStorage.setItem("cc_cookies", String(Math.max(0, n)));
  updateWallets();
}
function addCookies(n) { setCookies(getCookies() + n); }
function spendCookies(n) {
  const c = getCookies();
  if (c < n) return false;
  setCookies(c - n);
  return true;
}
function updateWallets() {
  const t = `⬡ × ${getCookies()}`;
  ["wallet", "wallet2", "wallet3"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t;
  });
  if (typeof updateDrawControls === "function" && document.getElementById("view-draw") &&
      !document.getElementById("view-draw").classList.contains("hidden") &&
      !document.getElementById("draw-room").classList.contains("hidden")) {
    updateDrawControls();
  }
}

/* ---------------- daily attempts ---------------- */

function quizState() {
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
  let s;
  try { s = JSON.parse(localStorage.getItem("cc_quiz") || ""); } catch (e) { s = null; }
  if (!s || typeof s !== "object" || s.d !== today) s = { d: today, easy: 0, hard: 0 };
  // shape + clamp: tampered counts (negative, float, > daily cap) reset to legal bounds
  const clamp = n => (Number.isInteger(n) && n > 0) ? Math.min(n, QUIZ_DAILY) : 0;
  s.easy = clamp(s.easy);
  s.hard = clamp(s.hard);
  return s;
}
function saveQuizState(s) { localStorage.setItem("cc_quiz", JSON.stringify(s)); }
function quizUsedToday() {
  const s = quizState();
  return s.easy + s.hard;   // shared daily pool across both difficulties
}
function attemptsLeft() {
  return TEST_MODE ? Infinity : QUIZ_DAILY - quizUsedToday();
}

/* ---------------- daily free draws ----------------
   Everyone gets FREE_DRAWS free draws per day; after that each draw
   costs COOKIE_COST Tokens. */
function drawState() {
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
  let s;
  try { s = JSON.parse(localStorage.getItem("cc_draws") || ""); } catch (e) { s = null; }
  if (!s || typeof s !== "object" || s.d !== today) s = { d: today, free: 0 };
  // shape + clamp: tampered counts (negative, float, > daily cap) reset to legal bounds
  s.free = (Number.isInteger(s.free) && s.free > 0) ? Math.min(s.free, FREE_DRAWS) : 0;
  return s;
}
function freeDrawsLeft() {
  return TEST_MODE ? Infinity : FREE_DRAWS - drawState().free;
}
function recordFreeDraw() {
  const s = drawState();
  s.free += 1;
  localStorage.setItem("cc_draws", JSON.stringify(s));
}

/* ---------------- question bank ----------------
   answer must exist in the library. `mode` decides distractor flavor. */

const QUIZ_BANK = [
  // ---- ROAST ----
  { zh: "室友喝了你冰箱里的奶茶，还说：『我帮你去冰了，谢谢我吧。』", en: "Your roommate drank your bubble tea from the fridge and says: 'I removed the ice for you. You're welcome, by the way.'",
    answer: "恬不知耻", mode: "argue",
    explain: "恬不知耻 — he drank your tea AND wants gratitude. Calmly not knowing shame." },
  { zh: "你哥吃光了你的薯条，反而抱怨：『谁让你买这么少！』", en: "Your brother ate ALL your fries, then complains: 'Why did you buy so few?!'",
    answer: "倒打一耙", mode: "argue",
    explain: "倒打一耙 — the rake swings backwards. The eater blames the buyer. Zhu Bajie would be proud." },
  { zh: "家里最后一块披萨不见了。你弟嗓门最大：『肯定是你吃的！』", en: "The last pizza slice is gone. Your little brother yells loudest: 'It was YOU!'",
    answer: "贼喊捉贼", mode: "argue",
    explain: "贼喊捉贼 — the thief shouts 'catch the thief' the loudest. Classic projection." },
  { zh: "朋友迟到一小时，解释是：『我迟到是因为我到得太早了。』", en: "Your friend is an hour late. The explanation: 'I was late because I arrived too early.'",
    answer: "强词夺理", mode: "argue",
    explain: "强词夺理 — forcing words to seize reason. Logic left the building." },
  { zh: "同事说：『网上说这种菜致癌！』你问来源，她说『群里说的』。", en: "A coworker warns: 'This vegetable causes cancer!' You ask for the source. She says: 'The group chat said so.'",
    answer: "道听途说", mode: "argue",
    explain: "道听途说 — heard on the road, retold on the path. Source: trust me bro." },
  { zh: "有人给米其林餐厅打一星，理由是：『居然要提前订位，差评！』", en: "Someone leaves a Michelin restaurant a 1-star review: 'They expect a RESERVATION?! One star.'",
    answer: "无理取闹", mode: "argue",
    explain: "无理取闹 — making a scene without reason. The reservation was the crime." },
  { zh: "你让同事搭车回家，他转头告诉所有人你开车像赛车手。", en: "You gave a coworker a ride home. He then tells everyone you drive like a maniac.",
    answer: "恩将仇报", mode: "argue",
    explain: "恩将仇报 — kindness repaid with enmity. You offered the ladder; he burned the house." },
  { zh: "你借过他一次充电器。现在他说：『手机也送我呗，反正你有钱。』", en: "You lent him a charger once. Now he says: 'Just give me your phone too. You're rich.'",
    answer: "得寸进尺", mode: "argue",
    explain: "得寸进尺 — give an inch, he advances a foot. Greed with a unit-conversion problem." },
  { zh: "你把蛋糕烤糊了，你姐把它发到家族群里，还配了个笑脸。", en: "You burnt a cake. Your sister posts it in the family group chat — with a smiley face.",
    answer: "幸灾乐祸", mode: "argue",
    explain: "幸灾乐祸 — rejoicing in disaster, delighting in misfortune. Schadenfreude, formally charged." },
  { zh: "他跟你学了红烧肉配方，现在逢人就说你做得不正宗。", en: "He learned your braised-pork recipe from you. Now he tells everyone yours isn't authentic.",
    answer: "过河拆桥", mode: "argue",
    explain: "过河拆桥 — cross the river, dismantle the bridge. You built it; he demolished it." },
  { zh: "新住户声称：『物业我表哥管，这栋楼你们都得听我的。』", en: "The new tenant announces: 'My cousin runs property management. You ALL answer to me.'",
    answer: "狐假虎威", mode: "argue",
    explain: "狐假虎威 — the fox borrows the tiger's might. Borrowed power, homemade bullying." },
  { zh: "小区群里有人说：『就是你家的狗毁了草坪！』但根本没证据。", en: "The neighborhood group says: 'YOUR dog ruined the lawn!' There is zero evidence.",
    answer: "血口喷人", mode: "argue",
    explain: "血口喷人 — spraying blood at the innocent. Slander vicious enough to draw blood." },
  { zh: "他一个音符都不识，却报名了乐团面试。", en: "He can't read a single note of music — and he signed up for the orchestra audition.",
    answer: "滥竽充数", mode: "argue",
    explain: "滥竽充数 — faking the flute in the royal band. Pretending competence among the skilled." },
  { zh: "他看了三个做菜视频，宣布：『我随时可以开餐厅。』", en: "He watched three cooking videos and announces: 'I could open a restaurant anytime.'",
    answer: "纸上谈兵", mode: "argue",
    explain: "纸上谈兵 — discussing troops on paper. Armchair general, zero kitchen hours." },
  { zh: "卖保健品的销售对我奶奶说：『阿姨您的皮肤也太年轻了吧！』", en: "The supplement salesman tells your grandma: 'Madam, your skin is SO youthful!'",
    answer: "花言巧语", mode: "argue",
    explain: "花言巧语 — flower words, clever speech. A bouquet: beautiful, decorative, sterile." },
  { zh: "他插队还理直气壮：『我刚才就站在这附近。』", en: "He cuts the whole line, dead certain: 'I was standing NEAR this spot earlier.'",
    answer: "明目张胆", mode: "argue",
    explain: "明目张胆 — wide-open eyes, bold gall. Cutting lines in broad daylight, proudly." },
  { zh: "他声称最讨厌甜食。你本周已经在蛋糕店碰到他三次了。", en: "He claims to hate desserts. You've bumped into him at the bakery three times this week.",
    answer: "口是心非", mode: "argue",
    explain: "口是心非 — the mouth votes yes, the heart files a veto. Bakery says otherwise." },
  { zh: "花钱重刷的墙，不到一个月就开始掉皮。", en: "They paid for a full repaint. The wall started peeling within a month.",
    answer: "偷工减料", mode: "argue",
    explain: "偷工减料 — stolen work, cut materials. Savings you meet later, peeling." },
  { zh: "让他洗碗，他冲了一下水就把碗摆回柜子里了。", en: "Asked to wash the dishes, he rinses them once and racks them back in the cabinet.",
    answer: "敷衍了事", mode: "argue",
    explain: "敷衍了事 — brushed over, finished in name only. The grease survived." },
  { zh: "他答应戒烟。阳台上的烟头一天比一天多。", en: "He promised to quit smoking. The balcony ashtray fills up a little more every day.",
    answer: "阳奉阴违", mode: "argue",
    explain: "阳奉阴违 — obeys in daylight, sabotages after sunset. The ashtray keeps receipts." },
  { zh: "他做慈善时自带摄影师，拍完九宫格就走了。", en: "He does charity — with his own cameraman. Posts a nine-photo grid, then leaves.",
    answer: "沽名钓誉", mode: "argue",
    explain: "沽名钓誉 — buying fame, fishing for praise. The donation was a photoshoot." },
  { zh: "他假扮军官，在城里到处行骗了一年。", en: "He posed as a military officer and swindled people across the city for a year.",
    answer: "招摇撞骗", mode: "argue",
    explain: "招摇撞骗 — parading in fake glory, swindling street by street." },
  // ---- SIP TEA (sarcasm) ----
  { zh: "朋友咬定答案选B，结果正确答案是C。他说：『出题的错了。』", en: "Your friend swore the answer was B. It was C. He says: 'The question setter is wrong.'",
    answer: "甘拜下风", mode: "sarcasm",
    explain: "甘拜下风 — 'I gladly bow to the downward wind.' Pure slow-clap surrender." },
  { zh: "他迟到两小时，理由：闹钟没响、路上猫太多、地球引力太大。", en: "He's two hours late. The reasons: alarm failed, too many cats on the road, gravity was too strong.",
    answer: "佩服佩服", mode: "sarcasm",
    explain: "佩服佩服 — admire submit, admire submit. Doubled praise, doubled salt." },
  { zh: "同事端出西瓜泡面蛋糕。全场安静了十秒。", en: "Your coworker presents a watermelon-and-instant-noodle cake. The room goes silent for ten seconds.",
    answer: "大开眼界", mode: "sarcasm",
    explain: "大开眼界 — a big open eye horizon. You've never seen anything quite that wrong." },
  { zh: "股票跌停了。他却说：『我早说过它会涨，看吧！』", en: "The stock hit limit-down. He still says: 'I TOLD you it would rise! See?!'",
    answer: "高瞻远瞩", mode: "sarcasm",
    explain: "高瞻远瞩 — gazing high, watching far. Visionary, in an alternate universe." },
  { zh: "他兴奋地宣布：『我今天早上自己烧开了水！』", en: "He excitedly announces: 'I boiled water all by myself this morning!'",
    answer: "刮目相看", mode: "sarcasm",
    explain: "刮目相看 — wipe your eyes and look again. Milestone: water, boiled." },
  { zh: "他喝了你最后一口奶茶，还说：『帮你控制糖分摄入，没什么好责怪的吧。』", en: "He drank the last of your milk tea: 'Helping you control your sugar intake. Can't fault me, right?'",
    answer: "无可厚非", mode: "sarcasm",
    explain: "无可厚非 — no room for heavy blame. The national anthem of excuses." },
  { zh: "群里发红包他永远第一个抢，还理直气壮地说这不过是普通人的本能。", en: "He grabs every red packet first, completely unashamed: 'Just human nature.'",
    answer: "人之常情", mode: "sarcasm",
    explain: "人之常情 — just common human feeling. Covers everything from laziness to theft." },
  { zh: "问他谁点的夜宵外卖，他说：『我的手指自己下的单。』", en: "Asked who ordered the midnight takeout, he says: 'My finger placed the order by itself.'",
    answer: "身不由己", mode: "sarcasm",
    explain: "身不由己 — the body refuses orders from the self. The timeless alibi." },
  { zh: "花盆碎了。他的解释：『猫干的。』——你没养猫。", en: "The flowerpot shattered. His explanation: 'The cat did it.' — You don't have a cat.",
    answer: "天衣无缝", mode: "sarcasm",
    explain: "天衣无缝 — heaven's robe has no seams. A flawless story, a missing cat." },
  { zh: "他清了清嗓子，无比严肃地宣布：『袜子永远不能配凉鞋。』", en: "He clears his throat and gravely announces: 'Socks must NEVER meet sandals.'",
    answer: "郑重其事", mode: "sarcasm",
    explain: "郑重其事 — solemn ceremony for the trivial. The Vatican has issued no such ruling." },
  { zh: "你感冒痊愈两周后，他才拎来姜汤：『来得正是时候！』", en: "Your cold ended two weeks ago. NOW he arrives with ginger soup: 'Perfect timing!'",
    answer: "雪中送炭", mode: "sarcasm",
    explain: "雪中送炭 — charcoal delivered in the snow. Delivered one melt-season late." },
  { zh: "开会他讲了两个小时。没人插上一句话，也没人记住重点。", en: "He spoke for two hours straight in the meeting. Nobody got a word in; nobody remembers the point.",
    answer: "滔滔不绝", mode: "sarcasm",
    explain: "滔滔不绝 — a surging river of words with no exit ramp." },
  { zh: "你妈这周第三次语重心长地找你谈『熬夜的害处』。", en: "For the third time this week, your mom sits you down for a heartfelt lecture on staying up late.",
    answer: "苦口婆心", mode: "sarcasm",
    explain: "苦口婆心 — bitter mouth, granny heart. Year three of the sleep campaign." },
  { zh: "让他挪一下车，堵了整条路。他稳稳地坐着不动。", en: "You ask him to move his car — it's blocking the whole street. He sits there, rock steady.",
    answer: "稳如泰山", mode: "sarcasm",
    explain: "稳如泰山 — steady as Mount Tai. Ask denied, mountain unmoved." },
  { zh: "她连你穿哪双袜子都要管，还说自己『只是关心你』。", en: "She even manages which socks you wear, calling it 'just caring about you'.",
    answer: "无微不至", mode: "sarcasm",
    explain: "无微不至 — nothing too small to manage. Care so total it's surveillance." },
  // ---- PRAISE ----
  { zh: "公园里打太极的大爷，居然是全国武术冠军。", en: "The quiet uncle doing tai chi in the park? Turns out he's a national martial arts champion.",
    answer: "深藏不露", mode: "praise",
    explain: "深藏不露 — hidden deep, never revealed. Quiet exterior, terrifying resume." },
  { zh: "刚毕业的实习生一个人做完了整个数据后台。", en: "The fresh-graduate intern built the entire data dashboard alone.",
    answer: "后生可畏", mode: "praise",
    explain: "后生可畏 — the later-born are awe-worthy. Confucius-certified respect." },
  { zh: "婚礼上司仪临时邀请新郎致辞，他脱稿讲了三分钟，全场感动。", en: "At the wedding, the groom is asked to speak on the spot. Three unscripted minutes; there wasn't a dry eye.",
    answer: "出口成章", mode: "praise",
    explain: "出口成章 — exit the mouth, become an essay. Speech at publish quality, no draft." },
  { zh: "你教的学生棋艺已经稳赢你了。", en: "The student you coached now beats you at chess, consistently.",
    answer: "青出于蓝", mode: "praise",
    explain: "青出于蓝 — blue comes from indigo, yet ends up brighter. Student > teacher, by chemistry." },
  { zh: "厨师把豆腐切得薄到能透过它看报纸。", en: "The chef slices tofu thin enough to read a newspaper through it.",
    answer: "炉火纯青", mode: "praise",
    explain: "炉火纯青 — furnace fire at pure blue-green, the exact color of mastery." },
  { zh: "从不参加 KTV 的同事一开嗓，全场安静了。她拿了冠军。", en: "The coworker who never sings at karaoke finally opens her mouth — the room goes silent. She won the contest.",
    answer: "一鸣惊人", mode: "praise",
    explain: "一鸣惊人 — one cry astonishes everyone. Silent for years, then the sky looks up." },
  { zh: "排了两小时队的网红面馆，吃完你承认：值。", en: "Two hours queuing for the famous noodle shop. After the meal you admit: worth it.",
    answer: "名不虚传", mode: "praise",
    explain: "名不虚传 — the name is not vainly spread. Reputation confirmed by firsthand evidence." },
  { zh: "他十分钟修好了你折腾三天的服务器。你当场拜服。", en: "He fixed in ten minutes the server you wrestled with for three days. You surrender on the spot.",
    answer: "五体投地", mode: "praise",
    explain: "五体投地 — two knees, two hands, one head: full prostration. Total surrender to greatness." },
  { zh: "拿了烘焙大赛金奖的她，还在台下认真记评委的点评。", en: "She won gold at the baking contest — and was still taking careful notes on the judges' feedback.",
    answer: "虚怀若谷", mode: "praise",
    explain: "虚怀若谷 — humble as an empty valley. A mind with room for everything." },
  { zh: "年夜饭桌上，舅舅一个人讲得全家笑到拍桌子。", en: "At New Year's dinner, your uncle has the whole family pounding the table laughing.",
    answer: "妙语连珠", mode: "praise",
    explain: "妙语连珠 — clever words strung like pearls. Every line a keeper." },
  { zh: "他掐着秒表下楼，客人刚进门，汤刚好端上桌。", en: "He timed it perfectly — the guests walked in just as the soup left the stove.",
    answer: "神机妙算", mode: "praise",
    explain: "神机妙算 — divine planning, clever calculation. Predicted like an oracle." },
  { zh: "说好周末大扫除，她一上午就让全屋焕然一新。", en: "They promised a deep clean on Saturday; by noon the whole house was brand new.",
    answer: "雷厉风行", mode: "praise",
    explain: "雷厉风行 — thunder speed, wind execution. Backlog cleared before lunch." },
  { zh: "家族群里任何冷门问题，爷爷都能给出答案。", en: "Any obscure question in the family group chat — grandpa always has the answer.",
    answer: "学富五车", mode: "praise",
    explain: "学富五车 — learning fills five carts of bamboo scrolls. Ancient-unit erudition." },
  { zh: "她亲手设计的婚礼请柬，让所有宾客都舍不得扔。", en: "Her handmade wedding invitations — none of the guests can bring themselves to throw them away.",
    answer: "独具匠心", mode: "praise",
    explain: "独具匠心 — an ingenious heart all her own. Original by design." },
  { zh: "老中医三副药治好了你十年的老毛病。", en: "The old herbalist cured your ten-year-old ailment with three prescriptions.",
    answer: "妙手回春", mode: "praise",
    explain: "妙手回春 — marvelous hands return the spring. Medicine as a miracle." }
];

/* Expansion wave: +90 scenes (30 per category). */
const QUIZ_BANK_EXTRA = [
  // ---- ROAST +30 ----
  { zh: "公司大规模裁员，老板称之为『职业拓展机会』，还等着大家鼓掌。", en: "The boss renames mass layoffs 'career expansion opportunities' and waits for applause.",
    answer: "指鹿为马", mode: "argue",
    explain: "指鹿为马 — point at a deer, call it a horse. The lie is a loyalty test." },
  { zh: "泄密丑闻曝光后，公关把吹哨人塑造成罪魁祸首。", en: "After the leak, PR flips the story: the whistleblower becomes the villain.",
    answer: "混淆是非", mode: "argue",
    explain: "混淆是非 — deliberately mixing up right and wrong until truth loses its shape." },
  { zh: "聊天记录还在，他却说：『我从没同意过周五的截止日期。』", en: "The chat logs still exist, yet he says: 'I never agreed to the Friday deadline.'",
    answer: "出尔反尔", mode: "argue",
    explain: "出尔反尔 — issued by you, revoked by you. Screenshots: the checkmate piece." },
  { zh: "吵到一半，他直接戴上了耳机。", en: "Mid-argument, he simply puts his earbuds in.",
    answer: "不可理喻", mode: "argue",
    explain: "不可理喻 — reason cannot reach him. Arguing with a wall, with airpods." },
  { zh: "他吃完了你妈妈寄来的蛋糕，转头让你再买一个『一起分享』。", en: "He ate the cake your mom sent you, then asks you to order another — 'so we can share'.",
    answer: "厚颜无耻", mode: "argue",
    explain: "厚颜无耻 — thick face, no shame. Shamelessness with a forehead of armor." },
  { zh: "他从没出过县城，却断言：『我们这的面条是全球第一。』", en: "He's never left the county, yet declares: 'Our noodles are the best on Earth. I just know.'",
    answer: "井底之蛙", mode: "argue",
    explain: "井底之蛙 — the well's bottom is his whole sky." },
  { zh: "上了一节拳击体验课，他就约教练实战。", en: "One trial boxing class, and he challenges the coach to a spar.",
    answer: "自不量力", mode: "argue",
    explain: "自不量力 — not measuring your own strength. The coach said yes. Once." },
  { zh: "电梯里外放短视频，音量拉满，谁劝就翻白眼。", en: "Elevator speakerphone at max volume; eye-rolls for anyone who dares to ask.",
    answer: "目中无人", mode: "argue",
    explain: "目中无人 — eyes that register zero humans." },
  { zh: "把车停在无障碍车位：『我舅舅是区长。』", en: "Parked across the disabled spot: 'My uncle is the district chief.'",
    answer: "仗势欺人", mode: "argue",
    explain: "仗势欺人 — power borrowed, bullying homemade." },
  { zh: "保安平时对业主点头哈腰，经理一来立刻开始罚所有人的款。", en: "The guard is all smiles to residents — until the manager appears; suddenly he fines everyone.",
    answer: "狗仗人势", mode: "argue",
    explain: "狗仗人势 — the dog is only fierce when the owner is watching." },
  { zh: "App 上线当天下载破百万，第二天开发它的程序员就被裁了。", en: "The app shipped to a million downloads; the dev who built it was 'restructured' the next week.",
    answer: "卸磨杀驴", mode: "argue",
    explain: "卸磨杀驴 — millstone done, donkey slaughtered. Merits expire at delivery." },
  { zh: "历史上多少开国功臣，江山打完就被处死了。", en: "How many founding ministers helped the king win — and were executed after the coronation.",
    answer: "兔死狗烹", mode: "argue",
    explain: "兔死狗烹 — rabbit dead, dog boiled. The helper's historic fate." },
  { zh: "他支持的球队永远刚好是上赛季的冠军。", en: "His favorite football team is, always, whichever one won the league last season.",
    answer: "见风使舵", mode: "argue",
    explain: "见风使舵 — the rudder reads the wind. Loyalty, downwind edition." },
  { zh: "他能背出老板的咖啡口味，却记不住任何一个同事的名字。", en: "He knows the boss's coffee order by heart and not one teammate's name.",
    answer: "溜须拍马", mode: "argue",
    explain: "溜须拍马 — stroking beards, patting horses. Memory selects by rank." },
  { zh: "当面夸你演示做得多好的同事，刚提交了对它的投诉。", en: "The colleague who praised your presentation just submitted a formal complaint about it.",
    answer: "口蜜腹剑", mode: "argue",
    explain: "口蜜腹剑 — honey mouth, sword belly. Tang-dynasty certified two-face." },
  { zh: "她大声说『有些人用完马克杯从来不洗』，眼睛直勾勾盯着你工位。", en: "She announces 'SOME people never wash their mugs' — staring dead at your desk.",
    answer: "指桑骂槐", mode: "argue",
    explain: "指桑骂槐 — curse the locust by scolding the mulberry. Deniable artillery." },
  { zh: "你刚拒绝了她的帮忙请求，她的动态就出现：『某些人的忙好像很贵。』", en: "Minutes after you decline her favor, her status appears: 'Some people's help must be expensive.'",
    answer: "含沙射影", mode: "argue",
    explain: "含沙射影 — spits sand at your shadow, never your face." },
  { zh: "他跟你说 A 在背后说你坏话，又跟 A 说你在说他。", en: "He tells you that A badmouths you — and tells A the same about you.",
    answer: "挑拨离间", mode: "argue",
    explain: "挑拨离间 — a professional wedge driver. Friendships dismantled at market rate." },
  { zh: "他指控实习生偷文件——文件就在他自己抽屉里。", en: "He accuses the intern of stealing files. The files were in his own drawer.",
    answer: "无中生有", mode: "argue",
    explain: "无中生有 — something manufactured from pure nothing." },
  { zh: "『我碰到过一个那国游客很没礼貌，那个国家的人全是这样。』", en: "'I met one rude tourist from there — the whole country must be like that.'",
    answer: "以偏概全", mode: "argue",
    explain: "以偏概全 — one part used to cover the whole. Sample size: one." },
  { zh: "他截取了你句子的后半段，你的原意整个被反转了。", en: "He screenshots the second half of your sentence — your meaning flips entirely.",
    answer: "断章取义", mode: "argue",
    explain: "断章取义 — chop the chapter, grab a meaning. Context: deleted." },
  { zh: "看了两篇养宠文章，他就给你的狗下诊断。", en: "Two pet-care articles in, and he's diagnosing your dog's illness.",
    answer: "一知半解", mode: "argue",
    explain: "一知半解 — one part knowledge, half an understanding. Confidently underqualified." },
  { zh: "全家劝他别买彩票秘籍，第十本已经在快递路上了。", en: "The family begged him to stop buying lottery 'secret guides'. Guide #10 is already shipping.",
    answer: "执迷不悟", mode: "argue",
    explain: "执迷不悟 — clinging to the wrong path, calling it loyalty." },
  { zh: "牙疼半年了，他的坚持是：『牙医都是骗钱的。』", en: "Half a year of toothache; his stance holds: 'Dentists are a scam.'",
    answer: "讳疾忌医", mode: "argue",
    explain: "讳疾忌医 — hide the illness, hate the doctor. The duke who refused checkups." },
  { zh: "他点评你的设计像莎士比亚，自己的作品集像案发现场。", en: "His critique of your design is Shakespeare; his own portfolio is a crime scene.",
    answer: "眼高手低", mode: "argue",
    explain: "眼高手低 — eyes at master level, hands still in kindergarten." },
  { zh: "简历只有半页没写完，他已经约投资人谈融资了。", en: "His resume is one unfinished paragraph; he's already booking investor meetings.",
    answer: "好高骛远", mode: "argue",
    explain: "好高骛远 — chasing the horizon, tripping on the doorstep." },
  { zh: "他答应的十件事，九件蒸发了，第十件『在推进中』。", en: "Of the ten favors he promised, nine evaporated. The tenth is 'in progress'.",
    answer: "轻诺寡信", mode: "argue",
    explain: "轻诺寡信 — promises wholesale, delivery retail." },
  { zh: "他每年元旦宣布减肥，二月份就吃回去了，年年如此。", en: "He declares a diet every New Year and eats it back by February. Every single year.",
    answer: "食言而肥", mode: "argue",
    explain: "食言而肥 — eats his own words and grows fat on them." },
  { zh: "你家店铺刚被水淹，他的第一个报价是市场价的两折。", en: "Your shop just flooded. His first offer: 20% of market price.",
    answer: "趁火打劫", mode: "argue",
    explain: "趁火打劫 — robbery with a fire schedule. The crisis is the store opening." },
  { zh: "部门一乱成一锅粥，他就出现了，手里还拿着备用钥匙和预算卡。", en: "The moment the office descends into chaos, he appears — holding the spare keys and the budget card.",
    answer: "浑水摸鱼", mode: "argue",
    explain: "浑水摸鱼 — muddies the water first, then fishes in it." },
  // ---- SIP TEA +30 ----
  { zh: "『你的借口是堵车，我的是闹钟坏了——谁更离谱？』『半斤对八两。』", en: "'Yours was traffic, mine was a broken alarm — who's worse?' 'Exactly equal, by ancient mathematics.'",
    answer: "半斤八两", mode: "sarcasm",
    explain: "半斤八两 — half a jin equals eight liang. Equally bad, officially." },
  { zh: "他俩在群里从中午吵到半夜，谁也没赢。", en: "They argued in the group chat from noon to midnight. The perfect match — zero winners.",
    answer: "棋逢对手", mode: "sarcasm",
    explain: "棋逢对手 — a matched opponent at chess. No winner was ever possible." },
  { zh: "『你俩做的菜到底谁更难吃？』评委们集体辞职了。", en: "'Whose cooking is worse, yours or his?' The judges collectively resigned.",
    answer: "不相上下", mode: "sarcasm",
    explain: "不相上下 — impossible to say who's above. Equally hopeless, diplomatically." },
  { zh: "他俩在派对上只见过一面，就火速结盟把碎花瓶赖给你。", en: "They met ONCE at the party — and instantly allied to pin the broken vase on you.",
    answer: "一拍即合", mode: "sarcasm",
    explain: "一拍即合 — one clap and they clicked. An alliance born in seconds." },
  { zh: "你们俩同时往拿铁里加盐，连出错都这么默契。", en: "You both salted your lattes at the same second — soulmates in mistakes.",
    answer: "心有灵犀", mode: "sarcasm",
    explain: "心有灵犀 — hearts sharing one invisible line. Line: salty." },
  { zh: "三位同事面对同一道题，异口同声地答错了。", en: "Three colleagues failed the same question simultaneously — zero coordination needed.",
    answer: "不约而同", mode: "sarcasm",
    explain: "不约而同 — no discussion, identical result. Identically wrong." },
  { zh: "蛋糕精确地在第五分钟糊掉， timing 无懈可击。", en: "The cake burned at exactly minute five. The timing was impeccable.",
    answer: "恰到好处", mode: "sarcasm",
    explain: "恰到好处 — lands exactly where it should. In this case: the trash." },
  { zh: "3 比 0 领先时他就开了香槟，终场 3 比 4。", en: "He popped the champagne at three-nil. Final score: 3-4.",
    answer: "稳操胜券", mode: "sarcasm",
    explain: "稳操胜券 — the victory ticket firmly in hand. Then handed back." },
  { zh: "他号称发布方案绝不可能出错，上线十分钟就崩了。", en: "His fail-proof launch plan survived exactly ten minutes in production.",
    answer: "万无一失", mode: "sarcasm",
    explain: "万无一失 — ten thousand runs, zero failures. Famous last words." },
  { zh: "他说抢票有九成把握，开票八秒后页面显示：已售罄。", en: "He said the tickets were nine-in-ten sure. Eight seconds after open: sold out.",
    answer: "十拿九稳", mode: "sarcasm",
    explain: "十拿九稳 — ten grabs, nine certain. The one-in-ten found him instantly." },
  { zh: "大家祝他项目一路顺利，结果第一周就炸了。", en: "We wished his project smooth sailing. It exploded in week one.",
    answer: "一帆风顺", mode: "sarcasm",
    explain: "一帆风顺 — one sail, smooth wind. In the brochure only." },
  { zh: "相机、三脚架、滤镜全带齐了——没带电池。", en: "Camera ✓ tripod ✓ filters ✓ — forgot the battery.",
    answer: "万事俱备", mode: "sarcasm",
    explain: "万事俱备 — everything ready, except the one thing that mattered." },
  { zh: "雨下起来了，他才建议：『出门应该带伞。』", en: "The rain started. THEN he offered his wisdom: 'You should bring an umbrella.'",
    answer: "先见之明", mode: "sarcasm",
    explain: "先见之明 — foresight, one hour ahead of the obvious." },
  { zh: "他今天早上郑重『预测』了昨天比赛的结果。", en: "He solemnly 'predicted' yesterday's match result — this morning.",
    answer: "未卜先知", mode: "sarcasm",
    explain: "未卜先知 — knows without divining. Especially yesterday's news." },
  { zh: "假表就摆在他面前，这位号称什么都能看穿的专家却毫无反应。", en: "The fake watch sat right in front of his golden eyes — undetected.",
    answer: "火眼金睛", mode: "sarcasm",
    explain: "火眼金睛 — sees through anything. Except that." },
  { zh: "选择题考试他成功避开了所有正确答案，达成完美反向满分。", en: "On the multiple-choice exam he avoided every correct option — a perfect inverse score.",
    answer: "百发百中", mode: "sarcasm",
    explain: "百发百中 — a hundred shots, a hundred hits. The wall took them all." },
  { zh: "六月还背得流利纯熟的公式，七月考场上集体蒸发。", en: "Formulas recited fluently in June evaporated completely in the July exam hall.",
    answer: "滚瓜烂熟", mode: "sarcasm",
    explain: "滚瓜烂熟 — rotten-melon fluent, exam-day amnesia." },
  { zh: "无论刮风下雨，那位推销员每周三都准时来敲门。", en: "The salesman still rings the bell every Wednesday — rain or shine.",
    answer: "风雨无阻", mode: "sarcasm",
    explain: "风雨无阻 — wind and rain shall not stop it. Nothing can." },
  { zh: "五个平台都拉黑了他，他改用纸质信继续。", en: "Blocked on five apps, he upgraded to an actual paper letter.",
    answer: "死缠烂打", mode: "sarcasm",
    explain: "死缠烂打 — dead-cling, rotten-pester. The postal service joined the chat." },
  { zh: "同一个梗他讲了四十遍，每次自己都乐得不行。", en: "The same joke, round forty, and he's still delighted with himself.",
    answer: "乐此不疲", mode: "sarcasm",
    explain: "乐此不疲 — delights in this, never wearies. Audience: long gone." },
  { zh: "他独一无二的天赋是什么？找车位。除此之外没有了。", en: "His rare divine gift? Finding parking spots. Nothing else. Nothing.",
    answer: "天赋异禀", mode: "sarcasm",
    explain: "天赋异禀 — heaven granted a rare gift. Parking-adjacent only." },
  { zh: "学吉他一周，他宣布自己不用老师也能自行领悟。猫都听不下去。", en: "One week with a guitar and he declared himself a self-taught master. The cat files a complaint.",
    answer: "无师自通", mode: "sarcasm",
    explain: "无师自通 — no teacher, self-taught. Deaf neighbors, self-made." },
  { zh: "所有人都看见是谁打碎的花瓶，所有人都保持沉默。", en: "Everyone saw who broke the vase. The code of silence is total.",
    answer: "心照不宣", mode: "sarcasm",
    explain: "心照不宣 — hearts reflecting, nothing declared. Collective shrug achieved." },
  { zh: "警察分别询问三位目击者，得到了同一个错误的名字。", en: "The detective asked three witnesses and received the exact same wrong name.",
    answer: "异口同声", mode: "sarcasm",
    explain: "异口同声 — different mouths, same sound. Wrong in perfect unison." },
  { zh: "投诉排行榜第一名，他连续三年卫冕。", en: "Top entry on the complaint leaderboard — three years running.",
    answer: "名列前茅", mode: "sarcasm",
    explain: "名列前茅 — name listed among the front. Of the wrong list." },
  { zh: "他的午休时长两小时，保持着部门纪录。", en: "Two-hour lunch breaks — an undefeated department record.",
    answer: "遥遥领先", mode: "sarcasm",
    explain: "遥遥领先 — far, far ahead. Of everyone in coffee breaks." },
  { zh: "出差回来行李塞满纪念品，报销单上全是『客户宴请』。", en: "The 'business trip' returned with a suitcase of souvenirs and a report full of 'client dinners'.",
    answer: "满载而归", mode: "sarcasm",
    explain: "满载而归 — fully loaded on the return trip. Mostly receipts." },
  { zh: "『云端会自动备份一切。』备份：零。枕头：很高。", en: "'The cloud auto-saves everything.' Backups: zero. Pillow: high.",
    answer: "高枕无忧", mode: "sarcasm",
    explain: "高枕无忧 — high pillow, zero worries — right until the 3 a.m. alarm." },
  { zh: "截止日当天开工——这永远是他开始干活的日子。一致性就是他的品牌。", en: "Deadline day: the day he ALWAYS starts working. Consistency is his brand.",
    answer: "一如既往", mode: "sarcasm",
    explain: "一如既往 — exactly as always. The panic is punctual." },
  { zh: "你被锁门外三小时，开锁师傅才慢悠悠出现，主角光环十足。", en: "You waited three hours locked outside; the locksmith arrived with full main-character energy.",
    answer: "姗姗来迟", mode: "sarcasm",
    explain: "姗姗来迟 — saunter, saunter, arriving late. Hour three's headliner." },
  // ---- PRAISE +30 ----
  { zh: "他的球技已经不像技术动作了，防守队员只能欣赏。", en: "His dribbling left technique behind and became magic — defenders just stand and admire.",
    answer: "出神入化", mode: "praise",
    explain: "出神入化 — out of spirit, into transformation. Skill that became art." },
  { zh: "他包的饺子登上了美食纪录片。", en: "His dumplings made it into a food documentary.",
    answer: "登峰造极", mode: "praise",
    explain: "登峰造极 — climbed the peak, built a tower on it." },
  { zh: "他用一根萝卜雕出了整条龙，鳞片都清清楚楚。", en: "He carved an entire dragon out of a single radish — every scale visible.",
    answer: "巧夺天工", mode: "praise",
    explain: "巧夺天工 — craft that out-bids heaven's own factory." },
  { zh: "我妈的辣椒酱，物理学上不可能存在第二家。", en: "My mom's chili sauce — physics says it exists nowhere else on Earth.",
    answer: "举世无双", mode: "praise",
    explain: "举世无双 — the whole world, no pair." },
  { zh: "奶奶的秘方辣酱只传给一个人——就是我。", en: "Grandma's secret chili-sauce recipe passes to exactly one person per generation. Me.",
    answer: "独一无二", mode: "praise",
    explain: "独一无二 — one of one. No returns, no copies." },
  { zh: "全城会修老式缝纫机的师傅，一只手数得过来。", en: "Masters who repair vintage sewing machines — a handful in the whole city.",
    answer: "凤毛麟角", mode: "praise",
    explain: "凤毛麟角 — phoenix feathers, qilin horns. Rarity itself." },
  { zh: "千人海选，她像锥尖一样穿透了整个舞台。", en: "A thousand dancers in the audition; she was the awl that pierced the bag.",
    answer: "脱颖而出", mode: "praise",
    explain: "脱颖而出 — the tip ALWAYS pokes through. Talent escapes packaging." },
  { zh: "所有人都穿羽绒服，他一身唐装逛庙会，回头率百分之百。", en: "Everyone wore down jackets; he strolled the temple fair in a tang suit. Every head turned.",
    answer: "鹤立鸡群", mode: "praise",
    explain: "鹤立鸡群 — a crane standing in a chicken flock. Unmissable." },
  { zh: "他退休那天，学生们从五个国家飞回来。", en: "At his retirement dinner, former students flew in from five countries.",
    answer: "桃李满门", mode: "praise",
    explain: "桃李满门 — peaches and plums fill the gate. Students everywhere, all his." },
  { zh: "同一个班，她布置三种作业，每个孩子都学得会。", en: "One class, three homework versions — every single kid gets their own key.",
    answer: "因材施教", mode: "praise",
    explain: "因材施教 — by the material, apply the teaching." },
  { zh: "王老师教了五十年书，仍然耐心回答每一个问题。", en: "Mr. Wang has taught for fifty years and still answers every question patiently.",
    answer: "诲人不倦", mode: "praise",
    explain: "诲人不倦 — teaching people, never tired. Five decades and counting." },
  { zh: "她的批评从来不伤人，像春雨一样渗进去。", en: "Her corrections never sting; they sink in gently, like rain.",
    answer: "春风化雨", mode: "praise",
    explain: "春风化雨 — spring wind turning into rain. Guidance that nourishes." },
  { zh: "那位学长帮你改代码，也帮你理清人生选择，两者都很温柔。", en: "The senior reviews your code AND your life choices — both, kindly.",
    answer: "良师益友", mode: "praise",
    explain: "良师益友 — a good teacher AND a helpful friend, in one person." },
  { zh: "连他提意见都像在朗诵诗。", en: "Even his complaints sound like a poetry reading.",
    answer: "温文尔雅", mode: "praise",
    explain: "温文尔雅 — gentle, cultured, elegant. Politeness with a scholarly finish." },
  { zh: "她第一次独自见男方全家，全程零怯场。", en: "She met his entire family alone for the first time — zero nerves.",
    answer: "落落大方", mode: "praise",
    explain: "落落大方 — natural and poised in any room. No awkward bone." },
  { zh: "那道谜题你还没念完，她已经说出了答案。", en: "You hadn't finished reading the puzzle; she'd already solved it.",
    answer: "冰雪聪明", mode: "praise",
    explain: "冰雪聪明 — ice-and-snow clever. A mind crystal clear." },
  { zh: "孩子万圣节的服装是她手缝的，全小区最佳。", en: "Her kid's Halloween costume is hand-sewn — the best on the block.",
    answer: "心灵手巧", mode: "praise",
    explain: "心灵手巧 — nimble heart, nimbler hands." },
  { zh: "年会上他弹了钢琴、画了速写、还变了个魔术。", en: "At the annual party he played piano, drew portraits, AND did magic tricks.",
    answer: "多才多艺", mode: "praise",
    explain: "多才多艺 — too many talents for one business card." },
  { zh: "他平时是会计，周末是拳击教练。", en: "Accountant on weekdays, boxing coach on weekends.",
    answer: "文武双全", mode: "praise",
    explain: "文武双全 — scholar's brain, fighter's hands." },
  { zh: "停电那晚，他张罗出一整桌烛光火锅。", en: "During the blackout he put together a full candle-lit hotpot dinner.",
    answer: "足智多谋", mode: "praise",
    explain: "足智多谋 — wisdom to spare, plans to deploy." },
  { zh: "厨房起火，他关煤气、盖锅盖，十秒搞定，声音都没抬高。", en: "Kitchen fire — gas off, lid on, done in ten seconds, voice never raised.",
    answer: "临危不惧", mode: "praise",
    explain: "临危不惧 — danger arrives; his pulse doesn't move." },
  { zh: "春节三十口人一桌菜，她一个人掌勺，气定神闲。", en: "Thirty relatives for Spring Festival dinner; she cooked alone, calm as breathing.",
    answer: "游刃有余", mode: "praise",
    explain: "游刃有余 — a blade with room to spare. Mastery looks like ease." },
  { zh: "同一道红烧肉他做了二十年，笔记上还写着『还要改』。", en: "Twenty years on the same braised-pork recipe — the notes still say 'needs work'.",
    answer: "精益求精", mode: "praise",
    explain: "精益求精 — already great, still polishing." },
  { zh: "他的账本连一块钱公交费都记得整整齐齐。", en: "His ledger records even the one-yuan bus fare, in perfect columns.",
    answer: "一丝不苟", mode: "praise",
    explain: "一丝不苟 — not one thread careless." },
  { zh: "同学家里刚出事，他的转账就到了，一句多余的话都没有。", en: "The moment his classmate's family had trouble, his transfer arrived — no questions asked.",
    answer: "慷慨解囊", mode: "praise",
    explain: "慷慨解囊 — opens the pouch before you finish asking." },
  { zh: "这周第三次了，他又去帮楼上老人把白菜扛上楼。", en: "Third time this week — he's off carrying cabbages upstairs for the old folks again.",
    answer: "助人为乐", mode: "praise",
    explain: "助人为乐 — helping people isn't a duty; it's his hobby." },
  { zh: "邻居小孩打碎了他的花盆，他反手送了孩子一包花种。", en: "The neighbor's kid smashed his flowerpot — he gifted the kid a pack of flower seeds.",
    answer: "宽宏大量", mode: "praise",
    explain: "宽宏大量 — forgiveness measured in industrial volumes." },
  { zh: "打牌时他赢多少都亮账，输了也全认，从不赖账。", en: "At cards he declares every win out loud and admits every loss. Always.",
    answer: "光明磊落", mode: "praise",
    explain: "光明磊落 — nothing in the dark, nothing to hide. Sunlight-tested integrity." },
  { zh: "管了十年小区账目，他家的沙发还是十年前那套。", en: "He managed the building's accounts for ten years — still sitting on the same old sofa.",
    answer: "两袖清风", mode: "praise",
    explain: "两袖清风 — clean as a breeze through empty sleeves." },
  { zh: "发现全团排错队，他几秒钟内带所有人换到了对的窗口。", en: "Spotting the wrong queue, he switched the entire tour group in seconds.",
    answer: "当机立断", mode: "praise",
    explain: "当机立断 — decides while others are still opening the meeting." }
];
QUIZ_BANK.push(...QUIZ_BANK_EXTRA);

/* ---------------- engine ---------------- */

let quizLevel = null;      // "easy" | "hard"
let currentQ = null;
let optionsLocked = false;
let hintStep = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickQuestion() {
  if (!pickQuestion.pool || !pickQuestion.pool.length) {
    pickQuestion.pool = shuffle(QUIZ_BANK.slice());
  }
  return pickQuestion.pool.pop();
}

function normalizePy(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z]/g, "");
}
function normWords(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z\s]/g, " ").split(/\s+/).filter(Boolean);
}

function literalOf(ch) {
  return (CHAR_BREAKDOWN[ch] || []).map(p => p[1]).join(" ");
}

function isHardAnswer(input, answerCh) {
  const value = input.trim();
  const literal = literalOf(answerCh);
  if (!value || !literal) return value === answerCh;
  const sequence = text => normWords(text).join(" ");
  const bag = text => normWords(text).slice().sort().join(" ");
  return value === answerCh ||
    sequence(value) === sequence(literal) ||
    bag(value) === bag(literal);
}

function makeOptions(q) {
  const ans = IDIOMS.find(i => i.ch === q.answer);
  const sameMode = IDIOMS.filter(i => i.ch !== q.answer && i.mode === q.mode);
  const sameLevel = shuffle(sameMode.filter(i => i.level === ans.level));
  const others = shuffle(sameMode.filter(i => i.level !== ans.level));
  const distract = sameLevel.concat(others).slice(0, 3).map(i => i.ch);
  return shuffle([q.answer, ...distract]);
}

function startQuiz(level) {
  if (attemptsLeft() <= 0) { renderAttempts(); return; }
  quizLevel = level;
  currentQ = pickQuestion();
  optionsLocked = false;
  document.getElementById("quiz-select").classList.add("hidden");
  document.getElementById("quiz-room").classList.remove("hidden");
  document.getElementById("quiz-level-label").innerHTML =
    level === "easy"
      ? `${iconSvg("quiz")} <span>Easy · 选择题</span>`
      : `${iconSvg("check")} <span>Hard · 重建字面意象</span>`;
  document.getElementById("q-en").textContent = currentQ.en;
  document.getElementById("q-zh").textContent = currentQ.zh;
  document.getElementById("q-ask").innerHTML =
    level === "easy"
      ? `${iconSvg("quiz")} Which chengyu is the perfect reply?`
      : `${iconSvg("draw")} Rebuild the literal image. Type the four English word-pictures that make up the idiom (any order). <span class="zh-sub" lang="zh-CN">按字面重建意象</span>`;
  renderAttempts();

  const res = document.getElementById("q-result");
  res.classList.add("hidden");
  document.getElementById("btn-next").classList.add("hidden");
  document.getElementById("btn-quiz-draw").classList.add("hidden");

  const optBox = document.getElementById("q-options");
  const hardBox = document.getElementById("q-hard-box");
  if (level === "easy") {
    hardBox.classList.add("hidden");
    optBox.classList.remove("hidden");
    optBox.innerHTML = "";
    for (const ch of makeOptions(currentQ)) {
      const id = IDIOMS.find(i => i.ch === ch);
      const b = document.createElement("button");
      b.className = "play-card quiz-card";
      b.innerHTML = `<b>${id.ch}</b><small>${literalOf(ch) || id.py}</small>`;
      b.addEventListener("click", () => answerEasy(ch, b));
      optBox.appendChild(b);
    }
  } else {
    optBox.classList.add("hidden");
    hardBox.classList.remove("hidden");
    const inp = document.getElementById("q-input");
    inp.value = "";
    inp.disabled = false;
    hintStep = 0;
    document.getElementById("btn-submit").disabled = false;
    document.getElementById("btn-hint").disabled = false;
    document.getElementById("q-hint").classList.add("hidden");
    document.getElementById("btn-hint").innerHTML = `${iconSvg("hint")} Hint <span class="zh-sub" lang="zh-CN">提示</span>`;
    setTimeout(() => inp.focus(), 50);
  }
}

function renderAttempts() {
  const el = document.getElementById("quiz-attempts");
  if (!el) return;
  if (TEST_MODE) {
    el.innerHTML = `TEST MODE · 测试模式 · Easy: <b>unlimited</b> · ` +
      `Hard: <b>unlimited</b> · Tokens: ⬡ × ${getCookies()}`;
    return;
  }
  el.innerHTML =
    `Rounds left today: <b>${attemptsLeft()}/${QUIZ_DAILY}</b> (Easy +1 · Hard +2 Tokens) · ` +
    `Tokens: ⬡ × ${getCookies()}`;
}

function levelExhausted() {
  return attemptsLeft() <= 0;
}

function showResult(correct, earned, extra) {
  const id = IDIOMS.find(i => i.ch === currentQ.answer);
  const res = document.getElementById("q-result");
  const head = correct
    ? (earned >= 2 ? "Nailed it — literal image rebuilt." : "Nailed it!")
    : pick(["Not quite…", "So close…", "Try the next scene."]);
  const headIcon = correct ? "check" : "quiz";
  res.innerHTML = `
    <div class="res-head ${correct ? "ok" : "no"}">${iconSvg(headIcon)}<span>${head}</span></div>
    <p><span class="used-idiom">${currentQ.answer}</span>
       <span class="pinyin">${id.py}</span></p>
    ${correct ? `<p class="res-earn">+${earned} Chengyu Token${earned === 1 ? "" : "s"}</p>` : `<p class="res-earn dim">+0 Tokens — try the next one.</p>`}
    <p class="res-explain">${currentQ.explain}</p>
    ${extra || ""}
    <button id="btn-result-play" class="ghost result-play" type="button" aria-label="Hear the answer in Chinese · 听答案发音">${iconSvg("play")} Play <span class="zh-sub" lang="zh-CN">听读音</span></button>`;
  res.classList.remove("hidden");
  document.getElementById("btn-result-play").addEventListener("click", () => speak(currentQ.answer));
  document.getElementById("btn-next").classList.remove("hidden");
  document.getElementById("btn-quiz-draw").classList.remove("hidden");
  renderAttempts();
}

function answerEasy(ch, btn) {
  if (optionsLocked) return;
  let state = null;
  if (!TEST_MODE) {
    state = quizState();
    if (quizUsedToday() >= QUIZ_DAILY) {
      backToQuizSelect();
      return;
    }
  }
  optionsLocked = true;
  if (state) {
    state[quizLevel] += 1;
    saveQuizState(state);
  }

  const correct = ch === currentQ.answer;
  document.querySelectorAll("#q-options .quiz-card").forEach(c => {
    const isAns = c.querySelector("b").textContent === currentQ.answer;
    if (isAns) c.classList.add("right");
    else if (c === btn) c.classList.add("wrong");
    c.disabled = true;
  });
  if (correct) {
    addCookies(1);
  }
  showResult(correct, 1);
}

function submitHard() {
  if (optionsLocked) return;
  const inp = document.getElementById("q-input");
  const val = inp.value.trim();
  if (!val) { inp.focus(); return; }
  let state = null;
  if (!TEST_MODE) {
    state = quizState();
    if (quizUsedToday() >= QUIZ_DAILY) {
      backToQuizSelect();
      return;
    }
  }
  optionsLocked = true;
  inp.disabled = true;
  document.getElementById("btn-submit").disabled = true;
  document.getElementById("btn-hint").disabled = true;
  if (state) {
    state[quizLevel] += 1;
    saveQuizState(state);
  }

  const lit = literalOf(currentQ.answer);
  const ok = isHardAnswer(val, currentQ.answer);
  if (ok) {
    addCookies(2);
  }
  showResult(ok, 2,
    ok ? "" : `<p class="res-explain">You typed: “${escapeHTML(val)}” · expected literal image: “${lit}” (${currentQ.answer})<br><span lang="zh-CN">标准答案（字面义）</span></p>`);
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
}

function toggleHint() {
  const h = document.getElementById("q-hint");
  const btn = document.getElementById("btn-hint");
  const id = IDIOMS.find(i => i.ch === currentQ.answer);
  const parts = CHAR_BREAKDOWN[currentQ.answer] || [];
  if (hintStep < parts.length) {
    hintStep += 1;
    const revealed = parts.map((part, index) => index < hintStep ? part[1] : "____");
    h.textContent = `Hint ${hintStep}/${parts.length}: ${revealed.join(" · ")}`;
    h.classList.remove("hidden");
    btn.innerHTML = hintStep === parts.length
      ? `${iconSvg("check")} Show answer <span class="zh-sub" lang="zh-CN">显示答案</span>`
      : `${iconSvg("hint")} Reveal next <span class="zh-sub" lang="zh-CN">继续提示</span>`;
    return;
  }
  h.textContent = `${currentQ.answer} · ${id.py} · ${literalOf(currentQ.answer)}`;
  h.classList.remove("hidden");
  btn.innerHTML = `${iconSvg("check")} Answer shown <span class="zh-sub" lang="zh-CN">答案已显示</span>`;
  btn.disabled = true;
}

function backToQuizSelect() {
  quizLevel = null;
  document.getElementById("quiz-room").classList.add("hidden");
  document.getElementById("quiz-select").classList.remove("hidden");
  renderAttempts();
}

/* ---------------- wiring ---------------- */

document.getElementById("btn-easy").addEventListener("click", () => startQuiz("easy"));
document.getElementById("btn-hard").addEventListener("click", () => startQuiz("hard"));
document.getElementById("btn-quiz-back").addEventListener("click", backToQuizSelect);
document.getElementById("btn-next").addEventListener("click", () => {
  if (levelExhausted()) {
    backToQuizSelect();
    return;
  }
  startQuiz(quizLevel);
});
document.getElementById("btn-quiz-draw").addEventListener("click", () => showView("draw"));
document.getElementById("btn-submit").addEventListener("click", submitHard);
document.getElementById("q-input").addEventListener("keydown", e => {
  if (e.key === "Enter") submitHard();
});
document.getElementById("btn-hint").addEventListener("click", toggleHint);

/* init */
function applyModeCopy() {
  const badge = document.getElementById("free-count");
  const sub = document.getElementById("quiz-sub");
  const easy = document.getElementById("easy-meta");
  const hard = document.getElementById("hard-meta");
  if (badge) badge.textContent = TEST_MODE ? "TEST MODE · unlimited" : "";
  if (TEST_MODE) {
    if (sub) sub.innerHTML =
      `A scene unfolds. Pick or rebuild the perfect chengyu. ` +
      `Testing is unlimited, and Draws cost <b>0 Tokens</b>.`;
    if (easy) easy.innerHTML =
      `Multiple choice — 4 cards, pick the right one.<br><b>Unlimited · +1 Token each</b>`;
    if (hard) hard.innerHTML =
      `No options. Rebuild the literal image — type the four English word-pictures (any order).<br><b>Unlimited · +2 Tokens each</b>`;
  }
}

function createTestResetButton() {
  if (!TEST_MODE) return;
  const slot = document.getElementById("me-reset-slot");
  if (!slot || document.getElementById("btn-reset-test")) return;
  const button = document.createElement("button");
  button.id = "btn-reset-test";
  button.className = "me-row me-link test-reset";
  button.type = "button";
  button.innerHTML = `${iconSvg("reset")} Reset test progress <span class="zh-sub" lang="zh-CN">重置测试进度</span>`;
  let armed = false;
  let resetTimer = null;
  button.addEventListener("click", () => {
    if (!armed) {
      armed = true;
      button.innerHTML = `${iconSvg("reset")} Confirm reset <span class="zh-sub" lang="zh-CN">确认重置</span>`;
      resetTimer = setTimeout(() => {
        armed = false;
        button.innerHTML = `${iconSvg("reset")} Reset test progress <span class="zh-sub" lang="zh-CN">重置测试进度</span>`;
      }, 5000);
      return;
    }
    clearTimeout(resetTimer);
    drawn = [];
    pickQuestion.pool = null;
    quizLevel = null;
    currentQ = null;
    optionsLocked = false;
    localStorage.removeItem("cc_quiz");
    setCookies(0);
    backToModes();
    backToQuizSelect();
    showView("draw");
    renderAttempts();
    const status = document.getElementById("draw-status");
    if (status) status.textContent = "Test progress reset.";
    armed = false;
    button.innerHTML = `${iconSvg("reset")} Reset test progress <span class="zh-sub" lang="zh-CN">重置测试进度</span>`;
  });
  slot.appendChild(button);
}

applyModeCopy();
createTestResetButton();
updateWallets();
renderAttempts();

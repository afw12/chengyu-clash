/* Copies the shared website code (../web) into Capacitor's webDir (www/)
   and injects the mobile bridge, without ever modifying the web/ originals.
   Run:  node sync-web.js            (dev: keeps TEST_MODE as-is)
         node sync-web.js --release  (flips TEST_MODE to false, asserts it)  */

const fs = require("fs");
const path = require("path");

const RELEASE = process.argv.includes("--release");
const SRC = path.resolve(__dirname, "..", "web");
const DEST = path.resolve(__dirname, "www");
const BRIDGE = path.resolve(__dirname, "bridge", "mobile-bridge.js");

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dst = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dst);
    else fs.copyFileSync(src, dst);
  }
}

/* 1. fresh copy of the site */
fs.rmSync(DEST, { recursive: true, force: true });
copyDir(SRC, DEST);

/* 2. drop in the mobile bridge (small, guarded, no-op on the web) */
const bridgeName = path.basename(BRIDGE);
fs.copyFileSync(BRIDGE, path.join(DEST, bridgeName));

/* 3. load it last, just before </body>, only in the packaged app copy */
const indexPath = path.join(DEST, "index.html");
let html = fs.readFileSync(indexPath, "utf8");
if (!html.includes(bridgeName)) {
  html = html.replace(
    "</body>",
    `<script src="${bridgeName}"></script>\n</body>`
  );
  fs.writeFileSync(indexPath, html);
}

/* 4. release gate: no TEST_MODE leak into shipped assets */
if (RELEASE) {
  const quizPath = path.join(DEST, "quiz.js");
  let quiz = fs.readFileSync(quizPath, "utf8");
  if (!quiz.includes("const TEST_MODE = false;")) {
    quiz = quiz.replace(
      "const TEST_MODE = true;",
      "const TEST_MODE = false; // injected by sync-web.js --release"
    );
    if (!quiz.includes("const TEST_MODE = false;")) {
      console.error("release sync failed: could not set TEST_MODE = false");
      process.exit(1);
    }
    fs.writeFileSync(quizPath, quiz);
  }
  const leaked = [];
  for (const entry of fs.readdirSync(DEST)) {
    if (!/\.(js|html)$/.test(entry)) continue;
    const text = fs.readFileSync(path.join(DEST, entry), "utf8");
    if (/TEST_MODE\s*=\s*true\b/.test(text)) leaked.push(entry);
  }
  if (leaked.length) {
    console.error(`release gate FAILED: TEST_MODE markers still present in: ${leaked.join(", ")}`);
    process.exit(1);
  }
  console.log("release gate: TEST_MODE disabled, no markers in shipped assets");
}

console.log(`synced ${SRC} -> ${DEST} (bridge injected: ${bridgeName}, release: ${RELEASE})`);

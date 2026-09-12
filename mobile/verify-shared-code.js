const fs = require("fs"), path = require("path"), crypto = require("crypto");
const hash = d => crypto.createHash("md5").update(d).digest("hex");
function scan(dir, base) {
  const out = {};
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    const rel = path.relative(base, p).split(path.sep).join("/");
    if (e.isDirectory()) Object.assign(out, scan(p, base));
    else out[rel] = hash(fs.readFileSync(p));
  }
  return out;
}
const root = path.join(__dirname, "..");
const web = scan(path.join(root, "web"), path.join(root, "web"));
const www = scan(path.join(root, "mobile/www"), path.join(root, "mobile/www"));
const and = scan(path.join(root, "mobile/android/app/src/main/assets/public"), path.join(root, "mobile/android/app/src/main/assets/public"));
console.log(`文件数: web=${Object.keys(web).length}, www=${Object.keys(www).length}, android=${Object.keys(and).length}`);
let same = 0, extra = [], diff = [];
for (const [f, h] of Object.entries(www)) {
  if (!(f in web)) extra.push(f);
  else if (web[f] === h) same++; else diff.push(f);
}
console.log(`www 与 web 内容相同的文件: ${same}/${Object.keys(web).length}`);
console.log(`www 相对 web 多出的文件: ${extra.join(", ") || "无"}`);
console.log(`www 相对 web 内容不同的文件: ${diff.join(", ") || "无"}`);
let asame = 0, aextra = [], adiff = [];
for (const [f, h] of Object.entries(and)) {
  if (!(f in www)) aextra.push(f);
  else if (www[f] === h) asame++; else adiff.push(f);
}
console.log(`android 与 www 内容相同的文件: ${asame}/${Object.keys(www).length}`);
console.log(`android 相对 www 多出的文件: ${aextra.join(", ") || "无"}`);
console.log(`android 相对 www 内容不同的文件: ${adiff.join(", ") || "无"}`);

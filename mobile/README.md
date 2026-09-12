# Chengyu Clash — 移动端（Capacitor 套壳）

一套代码，两个平台。网站原码在 `../web`（**零改动**），本目录只是把它包装成
iOS / Android App。原文件备份在 `../backup/website-original-20260905/`（已 MD5 校验）。

## 目录结构

```
mobile/
├─ capacitor.config.json   # appId: com.chengyuclash.app
├─ sync-web.js             # 把 ../web 复制到 www/ 并注入移动端桥接（不改 web/）
├─ bridge/mobile-bridge.js # 只在打包 App 内加载；网页版永远不加载
├─ www/                    # sync-web.js 的产物（不要手改，会被覆盖）
├─ android/                # npx cap add android 生成的原生工程（Windows 上可生成）
└─ package.json

注：codemagic.yaml 在仓库根（Codemagic 只认根目录的 yaml），不在本目录。
```

## 日常开发流程

改了 `../web` 里的代码之后，两步让两个 App 拿到最新页面：

```bash
cd mobile
npm run sync          # web/ -> www/（并注入桥接脚本）
npx cap sync android  # www/ -> android 原生工程
# iOS 同步在 Codemagic 云端自动完成（cap add ios + cap sync ios）
```

## Android 构建（本机 Windows 已配好，一条命令）

工具链已全部装在 E 盘（`E:\dev-android`，约 1.7GB，不占 C 盘）：
JDK 21（`jdk21`）、Android SDK（`sdk`，platform-tools + android-35 + build-tools 35.0.0）、
Gradle 缓存（`gradle-home`）、调试签名（`android-user-home`）。

```cmd
mobile\build-android.cmd        rem 产物: android\app\build\outputs\apk\debug\app-debug.apk
```

注意：项目路径含中文，AGP 检查已用 `android.overridePathCheck=true` 豁免（gradle.properties）。
如果未来某次 AGP 升级后构建因路径报错，备选方案是把整个项目挪到纯英文目录。

## iOS 构建（无 Mac 方案）

1. 注册 Codemagic（免费额度每月 500 分钟）
2. 把本仓库连到 Codemagic，它会读取仓库根的 `codemagic.yaml`
3. 在 Codemagic 控制台配置 Apple 签名（App Store Connect API key）
4. 跑 `ios-build` 工作流：云端 mac 自动执行 `cap add ios` → 打包 → 签名
5. 产物可上 TestFlight 分发给测试者
6. iOS 真机测试用 BrowserStack App Live（浏览器里远程操作真 iPhone），
   重点验证 TTS（speechSynthesis）在 WKWebView 里是否发声

## 桥接脚本说明（bridge/mobile-bridge.js）

- 只被 `sync-web.js` 注入到打包后的 `www/index.html`，`../web` 永远不受影响
- 当前功能：记录平台标识；若将来安装了原生 TTS 插件并暴露为
  `window.NativeTTS`，自动接管 `speak()`（WebView 里 speechSynthesis 可能
  存在但无声）；未安装时完全走网页原逻辑

## 上线前待办

- [ ] Google Play：个人账号 $25，先跑 12 人 × 14 天封闭测试（Play Console 自动统计）
- [ ] Android 变现：AdMob 激励视频（看广告 = 送一次抽卡）+ 一次性买断，不做订阅
- [ ] iOS：$99/年 开发者账号 + W-8BEN 税表 + 《付费 App 协议》
- [ ] 两端内购（IAP）：数字内容必须走平台内购，接入 @capacitor-community/in-app-purchases 或 RevenueCat
- [ ] 隐私政策页面（两家商店审核硬性要求）

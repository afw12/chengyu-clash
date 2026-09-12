/* Mobile bridge — loaded only in the packaged iOS/Android apps (see sync-web.js).
   On the plain website this file never loads, so web behavior is untouched.
   Keep it tiny: feature-detect, never assume, always fall back to web behavior. */

(function () {
  "use strict";
  var cap = window.Capacitor;
  var isNative = !!(cap && cap.isNativePlatform);
  if (!isNative) return;

  /* Platform flag for debugging */
  window.__CHENGYU_PLATFORM = (cap.getPlatform && cap.getPlatform()) || "native";

  /* ---- Status bar: tint it like the app, keep it readable ------------ */
  var StatusBar = cap.Plugins && cap.Plugins.StatusBar;
  if (StatusBar) {
    try {
      if (StatusBar.setStyle) StatusBar.setStyle({ style: "Light" });
      if (StatusBar.setBackgroundColor)
        StatusBar.setBackgroundColor({ color: "#FBF4E6" });
    } catch (e) { /* older devices: leave the default */ }
  }

  /* ---- Android hardware back button ----------------------------------
     Walk the app's screen stack; only quit from the home screen. */
  var App = cap.Plugins && cap.Plugins.App;
  if (App && App.addListener) {
    App.addListener("backButton", function () {
      var visible = function (id) {
        var el = document.getElementById(id);
        return el && !el.classList.contains("hidden");
      };
      if (visible("quiz-room")) {
        document.getElementById("btn-quiz-back").click();
      } else if (visible("draw-room")) {
        document.getElementById("btn-back").click();
      } else if (visible("view-favs") || visible("view-privacy")) {
        document.getElementById("btn-favs-back").click();
      } else if (visible("view-quiz") || visible("view-me")) {
        document.getElementById("tab-draw").click();
      } else {
        App.exitApp();
      }
    });
  }

  /* ---- Share card image ----------------------------------------------
     Write the PNG to the app cache, then hand the file to the system
     share sheet (WhatsApp / Instagram / Messages / Save to Files...). */
  var SharePlugin = cap.Plugins && cap.Plugins.Share;
  var Filesystem = cap.Plugins && cap.Plugins.Filesystem;
  if (SharePlugin && Filesystem) {
    window.__nativeShareImage = function (dataUrl, filename) {
      var base64 = String(dataUrl).split(",")[1];
      return Filesystem.writeFile({
        path: filename,
        data: base64,
        directory: "Cache"
      }).then(function (res) {
        return SharePlugin.share({ title: "Chengyu Clash", files: [res.uri] });
      });
    };
  }

  /* ---- TTS ------------------------------------------------------------
     speechSynthesis exists in Android WebView / iOS WKWebView but often
     stays silent (no audio session). The native TextToSpeech plugin takes
     over speak() when running inside the packaged app. Web behavior is
     only replaced on native builds. */
  var TTS = cap.Plugins && cap.Plugins.TextToSpeech;
  if (TTS && typeof TTS.speak === "function") {
    if (typeof window.speak === "function") window.__webSpeak = window.speak;
    window.speak = function (text) {
      try {
        var p = TTS.speak({ text: String(text), lang: "zh-CN", rate: 0.85 });
        if (p && typeof p.catch === "function") {
          p.catch(function (err) {
            console.warn("native TTS failed, falling back to web speech:", err);
            if (window.__webSpeak) window.__webSpeak(text);
          });
        }
      } catch (e) {
        if (window.__webSpeak) window.__webSpeak(text);
      }
    };
  }
})();

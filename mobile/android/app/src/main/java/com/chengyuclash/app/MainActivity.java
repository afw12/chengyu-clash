package com.chengyuclash.app;

import android.os.Build;
import android.os.Bundle;
import android.view.View;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Android 15+ (targetSdk 35+) forces edge-to-edge, so the WebView sits
        // under the status bar. Capacitor's SystemBars plugin only pads
        // natively when the WebView is too old for the CSS env() fix; on
        // newer WebViews it relies on env(safe-area-inset-top) reaching the
        // page, which still reports 0 on some devices — the header ends up
        // under the status bar. Replace its insets listener with our own:
        // pad the WebView's parent by the real system-bar insets and zero the
        // system-bar insets before they reach the page, so the offset is
        // applied exactly once regardless of WebView version.
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.VANILLA_ICE_CREAM) {
            return;
        }
        // setContentView failure leaves bridge null (no_webview fallback) — skip.
        if (bridge == null || bridge.getWebView() == null) {
            return;
        }

        View content = (View) bridge.getWebView().getParent();
        ViewCompat.setOnApplyWindowInsetsListener(content, (v, insets) -> {
            Insets bars = insets.getInsets(
                    WindowInsetsCompat.Type.systemBars()
                            | WindowInsetsCompat.Type.displayCutout());
            boolean keyboardVisible = insets.isVisible(WindowInsetsCompat.Type.ime());
            Insets ime = insets.getInsets(WindowInsetsCompat.Type.ime());

            v.setPadding(bars.left, bars.top, bars.right,
                    keyboardVisible ? ime.bottom : bars.bottom);

            // env(safe-area-inset-*) must stay 0 in the page, otherwise the
            // CSS safe-area padding would stack on top of this padding.
            if (bridge.getWebView() != null) {
                bridge.getWebView().evaluateJavascript(
                        "['top','right','bottom','left'].forEach(function(k){"
                                + "document.documentElement.style.setProperty('--safe-area-inset-'+k,'0px');"
                                + "});", null);
            }

            // Zero system-bar insets like SystemBars does; CONSUMED here would
            // break later inset recalculation.
            return new WindowInsetsCompat.Builder(insets)
                    .setInsets(
                            WindowInsetsCompat.Type.systemBars()
                                    | WindowInsetsCompat.Type.displayCutout(),
                            Insets.of(0, 0, 0, 0))
                    .build();
        });
        content.requestApplyInsets();
    }
}

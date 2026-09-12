@echo off
rem Build Chengyu Clash Android APK. JDK / SDK / Gradle cache all stay on E:.
rem AGP's non-ASCII path check is overridden in gradle.properties.

set JAVA_HOME=E:\dev-android\jdk21
set GRADLE_USER_HOME=E:\dev-android\gradle-home
set ANDROID_USER_HOME=E:\dev-android\android-user-home

cd /d "%~dp0android"
call gradlew.bat assembleDebug %*

echo.
echo APK output: android\app\build\outputs\apk\debug\app-debug.apk

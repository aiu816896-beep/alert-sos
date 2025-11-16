@echo off
echo ========================================
echo Emergency SOS App - APK Builder
echo ========================================
echo.

echo Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ========================================
echo Building APK for Android
echo ========================================
echo.
echo This process will:
echo 1. Install EAS CLI if needed
echo 2. Build APK using Expo
echo 3. Download APK when ready
echo.
echo Note: You'll need an Expo account (free)
echo.

pause

echo Installing EAS CLI...
call npm install -g eas-cli

echo.
echo Logging into Expo...
call eas login

echo.
echo Building APK...
call eas build --platform android --profile preview

echo.
echo ========================================
echo Build Complete!
echo ========================================
echo.
echo The APK will be available in your Expo dashboard
echo Or download it from the link provided above
echo.
pause

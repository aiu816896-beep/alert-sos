@echo off
echo ========================================
echo Emergency SOS App - Quick Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js is installed!
node --version
echo.

echo Checking npm installation...
npm --version
echo.

echo Installing dependencies...
echo This may take a few minutes...
echo.

npm install

if errorlevel 1 (
    echo.
    echo ERROR: Failed to install dependencies!
    echo Please check your internet connection and try again.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation Complete! 
echo ========================================
echo.
echo Next steps:
echo 1. Download Expo Go app on your phone
echo 2. Run: npm start
echo 3. Scan the QR code with Expo Go
echo.
echo For detailed instructions, see INSTALLATION.md
echo.
pause

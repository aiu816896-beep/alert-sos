# Installation & Setup Guide

## Step 1: Install Node.js and npm

If you don't have Node.js installed:

### Windows
1. Download Node.js from https://nodejs.org/ (LTS version recommended)
2. Run the installer
3. Open Command Prompt or PowerShell
4. Verify installation:
   ```
   node --version
   npm --version
   ```

## Step 2: Install Expo CLI

Open your terminal (PowerShell on Windows) and run:
```bash
npm install -g expo-cli
```

## Step 3: Install Project Dependencies

Navigate to the project folder:
```bash
cd "c:\Users\Nitesh\OneDrive\Desktop\emergency app"
```

Install dependencies:
```bash
npm install
```

This will install all required packages including:
- React Native
- React Navigation
- Expo modules (Location, SMS, Haptics, etc.)
- Firebase

## Step 4: Install Expo Go on Your Phone

### For Android:
- Download "Expo Go" from Google Play Store
- https://play.google.com/store/apps/details?id=host.exp.exponent

### For iOS:
- Download "Expo Go" from Apple App Store
- https://apps.apple.com/app/expo-go/id982107779

## Step 5: Start the Development Server

In the project folder, run:
```bash
npm start
```

or

```bash
expo start
```

This will:
1. Start the Metro bundler
2. Open a browser window with QR code
3. Show available options to run the app

## Step 6: Run on Your Device

### Method 1: Using Expo Go (Recommended for Testing)
1. Make sure your phone and computer are on the same WiFi network
2. Open Expo Go app on your phone
3. Scan the QR code shown in the terminal/browser
4. The app will load on your phone

### Method 2: Using Android Emulator
1. Install Android Studio
2. Set up an Android Virtual Device (AVD)
3. Press 'a' in the terminal where expo is running

### Method 3: Using iOS Simulator (Mac only)
1. Install Xcode from Mac App Store
2. Press 'i' in the terminal where expo is running

## Step 7: Testing the App

1. **First Launch**: You'll see the welcome screen
2. **Grant Permissions**: Allow location access
3. **Add Contacts**: Add at least one emergency contact (use your own number for testing)
4. **Configure Settings**: Choose which alert methods to enable
5. **Test SOS**: On the home screen, press and hold the RED button

⚠️ **Important for Testing**:
- Use your own phone number as a contact for initial testing
- Make sure location services are enabled on your device
- Grant all requested permissions

## Step 8: Building for Production (Optional)

### For Android APK:
```bash
expo build:android
```

### For iOS IPA:
```bash
expo build:ios
```

Note: Building for production requires additional setup and may require paid Apple Developer account for iOS.

## Troubleshooting

### "npx is not recognized"
- Node.js is not installed or not in PATH
- Reinstall Node.js and make sure to check "Add to PATH" during installation

### "Cannot find module"
- Run `npm install` again
- Delete `node_modules` folder and run `npm install`

### App not loading on phone
- Check if phone and computer are on same WiFi
- Try restarting the Expo development server
- Check firewall settings

### Location not working
- Make sure location services are enabled in phone settings
- Grant location permission when app requests it
- For Android, ensure GPS is turned on

### SMS not sending
- SMS functionality only works on real devices, not simulators
- On Android, you may need to set the app as default SMS app temporarily
- iOS has restrictions on SMS - it opens the messaging app with pre-filled text

## Need Help?

- Check the README.md for more information
- Visit Expo documentation: https://docs.expo.dev/
- Check React Native docs: https://reactnative.dev/

## Next Steps

After successful installation:
1. Customize the app icon (optional)
2. Set up Firebase for live tracking (optional)
3. Add siren audio file (see SIREN_AUDIO_NOTE.txt)
4. Test all features thoroughly
5. Share with family members

---

**Your safety app is ready! Stay safe! 🛡️**

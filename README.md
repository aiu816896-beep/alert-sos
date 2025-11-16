# Emergency SOS App

A React Native emergency alert application that helps users quickly notify emergency contacts during critical situations.

## Features

✅ **Quick SOS Activation** - Press and hold the red button for 2.5 seconds
✅ **Automatic Location Sharing** - GPS location sent with every alert
✅ **SMS Alerts** - Instant SMS to all emergency contacts
✅ **WhatsApp Integration** - Pre-filled emergency messages
✅ **Live Location Tracking** - Real-time location updates (Firebase)
✅ **Emergency Siren** - Optional loud alarm sound
✅ **Contact Management** - Easy add/edit/remove emergency contacts
✅ **Customizable Settings** - Choose which alert methods to use

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Expo CLI (`npm install -g expo-cli`)
- For iOS: Xcode (Mac only)
- For Android: Android Studio

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
   - Scan the QR code with Expo Go app (iOS/Android)
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

### Firebase Configuration (Optional - for Live Tracking)

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Realtime Database
3. Copy your Firebase configuration
4. Update `src/services/FirebaseService.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Adding Siren Sound

Place your siren audio file as `assets/siren.mp3` for the emergency alert sound feature.

## How It Works

### User Setup Flow
1. Welcome screen with app introduction
2. Request necessary permissions (Location, SMS)
3. Add emergency contacts
4. Configure alert settings
5. Ready to use!

### Emergency Activation Flow
1. Press and hold RED SOS button (2.5 seconds)
2. Confirm activation
3. App retrieves GPS location
4. Creates emergency message with location link
5. Sends SMS to all contacts (if enabled)
6. Opens WhatsApp with pre-filled message (if enabled)
7. Starts live location tracking (if enabled)

### Emergency Message Format
```
🚨 EMERGENCY ALERT! 🚨

[Name] needs help!

Location: https://www.google.com/maps?q=lat,lng

This is an automated emergency message. Please respond immediately!
```

## Permissions Required

- **Location** (Required) - To share your location with emergency contacts
- **SMS** (Optional) - To send automatic SMS alerts
- **Contacts** (Optional) - To easily select emergency contacts
- **Vibration** - For haptic feedback
- **Network** - For WhatsApp and live tracking

## Project Structure

```
emergency-app/
├── src/
│   ├── screens/
│   │   ├── WelcomeScreen.js
│   │   ├── PermissionsScreen.js
│   │   ├── ContactsScreen.js
│   │   ├── SettingsScreen.js
│   │   └── HomeScreen.js
│   └── services/
│       ├── StorageService.js
│       ├── LocationService.js
│       ├── SMSService.js
│       ├── WhatsAppService.js
│       ├── FirebaseService.js
│       └── AlertService.js
├── App.js
├── app.json
└── package.json
```

## Building for Production

### Android APK
```bash
expo build:android
```

### iOS IPA
```bash
expo build:ios
```

## Important Notes

⚠️ **Use Responsibly** - This app is designed for real emergencies only
⚠️ **Test First** - Test with friends/family before relying on it
⚠️ **Battery** - Live tracking will drain battery faster
⚠️ **Permissions** - Some features require specific permissions
⚠️ **Network** - WhatsApp and live tracking require internet connection

## Future Enhancements

- 📹 Video/Audio recording during emergency
- 📞 Fake call feature to escape unsafe situations
- 🔒 Lock screen widget for quick access
- 👨‍👩‍👧‍👦 Family dashboard to monitor loved ones
- 🗺️ Location history and safe zones
- 🌐 Multi-language support

## Support

For issues or questions, please create an issue in the repository.

## License

This project is open source and available for personal and commercial use.

---

**Stay Safe! 🛡️**

# ⚡ Tempo — Daily Habit Tracker & Focus Chamber

<p align="center">
  <img src="https://img.shields.io/badge/Android-35%2B-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
  <img src="https://img.shields.io/badge/Jetpack%20Compose-Latest-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white" alt="Compose" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge" alt="License" />
</p>

---

## 📲 How to Download & Install the Android APK

### 1. ⚡ Instant In-App Download (Direct from Browser)
In the running web or mobile application, open the top header and click **"APK & README"** &rarr; tap **"Instant Direct Download"**. The `.apk` will download directly to your device without relying on external CDN links.

---

### 2. 📦 Download from GitHub Actions / Releases

| Resource | Link | Note |
|---|---|---|
| **⚙️ GitHub Actions (Build & Run APK)** | [GitHub Actions Workflow Runs](https://github.com/gianrufin/Tempo-Habit/actions) | Click `Run workflow` or push a commit to build the APK |
| **📦 GitHub Releases Hub** | [View Releases & Tags](https://github.com/gianrufin/Tempo-Habit/releases) | Contains released packages once CI finishes |
| **📥 Direct Release APK Link** | [Download tempo-android-release.apk](https://github.com/gianrufin/Tempo-Habit/releases/download/debug-latest/tempo-android-release.apk) | Available once GitHub Actions completes |
| **🔗 Repository Link** | [GitHub Repository](https://github.com/gianrufin/Tempo-Habit) | Source code and workflow files |

> ℹ️ **Why would a direct GitHub release link show 404?**  
> GitHub direct download URLs (`github.com/.../releases/download/...`) only become active **after** the GitHub Actions build workflow has run at least once in your repo. Once the workflow in `.github/workflows/build-debug-apk.yml` finishes, the APK asset is automatically published to the `debug-latest` release tag.

---

## ✨ Key Features

### 🌅 Chronological Ascending Habit Sequencing
- Habits and routines are dynamically sorted in **ascending order from Morning to Evening** (`Morning (8:00 AM)` &rarr; `Afternoon (1:00 PM)` &rarr; `Evening (6:00 PM)` &rarr; `Night (9:30 PM)` &rarr; `Anytime`).
- Scheduled reminder timestamps automatically position your tasks throughout the day.

### 🔄 In-App OTA Update Engine
- **Direct GitHub Releases Sync**: Check for new application versions in **Settings &gt; Android & GitHub Updates**.
- **In-App Package Downloader & Installer**: Downloads the APK package in real-time with download speed indicators and triggers direct installation without leaving the app.

### ⏱️ Focus Chamber & Sound Synthesizer
- Multi-mode focus timer: **Pomodoro** (Focus / Short Break / Long Break), **Countdown Timer**, and **Stopwatch**.
- Web Audio synthetic chime engine: *Golden Hour*, *Aura Ping*, *Crystal Fizz*, *Velvet Pop*, and *Cloud Drift*.
- Link focus intervals directly to habits for automatic streak tracking.

### 📅 Calendar & Habit Matrix
- Monthly completion matrix with day-by-day streak heat indicators.
- Filter by individual habits or view aggregated productivity scores.

### 📊 Behavioral Analytics & Recap
- Longest and current streak tracking with freeze shields.
- Mood correlation tracking (from Terrible to Fantastic).
- Exportable weekly & monthly visual recap summaries.

---

## 📥 Android Installation Instructions

1. Download the `.apk` file (via the in-app **APK & README** button or from [GitHub Actions/Releases](https://github.com/gianrufin/Tempo-Habit/actions)).
2. On your Android device, open your browser's Downloads or File Manager.
3. Tap `tempo-android-v1.0.0.apk` (or `tempo-android-release.apk`).
4. If prompted, toggle **Allow from this source** (Enable installation of unknown apps).
5. Tap **Install** and open **Tempo**!

---

## 🛠️ Building Locally From Source

### Android (Gradle)
```bash
# Clone the repository
git clone https://github.com/gianrufin/Tempo-Habit.git
cd Tempo-Habit

# Build Debug APK
./gradlew assembleDebug

# Build Release APK
./gradlew assembleRelease
```
The generated APK will be available in `app/build/outputs/apk/debug/app-debug.apk`.

### Web App (Vite + React)
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build
```

---

## 📄 License
Distributed under the MIT License. Built with ❤️ for seamless habit cultivation.

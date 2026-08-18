# ⚡ Tempo — Daily Habit Tracker & Focus Chamber

<p align="center">
  <img src="https://img.shields.io/badge/Android-35%2B-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
  <img src="https://img.shields.io/badge/Jetpack%20Compose-Latest-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white" alt="Compose" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge" alt="License" />
</p>

---

## 📲 Download & Install the Android APK

### 1. 📦 Direct Hosted Repository Download (Never 404)
The APK binary is committed directly in this repository:

| Repository | Direct Raw Download Link |
|---|---|
| **Tempo---A-Habit-Tracking-App** | [📥 Download tempo-android-release.apk](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/raw/main/apk/tempo-android-release.apk) |
| **Tempo-Habit (Alias)** | [📥 Download tempo-android-release.apk](https://github.com/gianrufin/Tempo-Habit/raw/main/apk/tempo-android-release.apk) |

---

### 2. ⚡ Instant In-App Download
In the live web application, click the **"APK & README"** button in the top bar and tap **"Instant Download APK (No 404)"** to download the package directly to your phone.

---

### 3. ⚙️ GitHub Actions CI Releases

| Resource | Link | Description |
|---|---|---|
| **GitHub Actions Workflow** | [⚙️ Actions Build Runs](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/actions) | View automated build status & triggers |
| **GitHub Releases Hub** | [📦 Releases & Tags](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/releases) | Official GitHub release assets |
| **GitHub Repository** | [📂 Codebase Root](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App) | Repository files and commits |

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

1. Download `tempo-android-release.apk` using the links above.
2. Open the downloaded file in your Android device's Downloads folder.
3. If prompted, toggle **Allow from this source** (Enable installation of unknown apps).
4. Tap **Install** and open **Tempo**!

---

## 🛠️ Building Locally From Source

### Android (Gradle)
```bash
# Clone repository
git clone https://github.com/gianrufin/Tempo---A-Habit-Tracking-App.git
cd Tempo---A-Habit-Tracking-App

# Build Web Bundle & Sync Assets
npm install
npm run build

# Build Android Debug APK
./gradlew assembleDebug
```
The output APK is generated at `app/build/outputs/apk/debug/app-debug.apk`.

---

## 📄 License
Distributed under the MIT License. Built with ❤️ for seamless habit cultivation.

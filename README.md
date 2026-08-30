<div align="center">

  <img src="LP_controller.png" alt="Let's Play PS4 Exploit Host" width="540" style="border-radius: 16px; filter: drop-shadow(0 0 45px rgba(0, 240, 255, 0.7));" />

  # 🚀 LET'S PLAY • PS4 MULTI-FIRMWARE EXPLOIT HOST
  ### 🎮 The Ultimate All-In-One WebKit & Kernel Exploit Suite for PS4 FW 7.00 - 13.00 🎮

  <p align="center">
    <strong>Developed & Maintained by <a href="https://github.com/ahmedelattar" target="_blank">Ahmed Elattar</a></strong>
  </p>

  <!-- Status Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/Developer-Ahmed%20Elattar-00f0ff?style=for-the-badge&logo=github&logoColor=black" alt="Developer">
    <img src="https://img.shields.io/badge/Platform-PlayStation%204-003791?style=for-the-badge&logo=playstation&logoColor=white" alt="PlayStation 4">
    <img src="https://img.shields.io/badge/Firmware-7.00%20--%2013.00-7928ca?style=for-the-badge" alt="Firmware">
    <img src="https://img.shields.io/badge/Payload-GoldHEN%20Loaded-00ff88?style=for-the-badge&logo=dependabot&logoColor=black" alt="GoldHEN">
    <img src="https://img.shields.io/badge/Cache-100%25%20Offline%20Ready-ff007f?style=for-the-badge" alt="Offline Ready">
    <img src="https://img.shields.io/badge/UI-Pure%20OLED%20Black-000000?style=for-the-badge&logo=css3&logoColor=cyan" alt="OLED Black">
  </p>

  <p align="center">
    <a href="#-about-the-project">About</a> •
    <a href="#-supported-firmwares--engines">Compatibility</a> •
    <a href="#-architecture--exploit-pipeline">Architecture</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-project-file-structure">File Structure</a> •
    <a href="#-quick-start--local-hosting">Local Setup</a> •
    <a href="#-ps4-offline-caching-guide">Offline Cache</a> •
    <a href="#-credits--acknowledgements">Credits</a>
  </p>

</div>

---

## 📖 About the Project

**LET'S PLAY** is an advanced, consolidated PlayStation 4 multi-firmware exploit host designed to provide seamless, stable, and offline-capable jailbreak execution for consoles running system software **from 7.00 up to 13.00**.

Instead of juggling multiple scattered exploit hosts for different firmware bands, **LET'S PLAY** unifies **PSFree**, **Lapse v2.04**, **NetCtrl**, and **Poops** into a single master suite with automatic firmware detection, interactive RGB controller controls, and direct **GoldHEN** payload injection.

---

## 🌟 Supported Firmwares & Engines

| Firmware Range | WebKit Exploit | Kernel Exploit Engine | Stability Patches (`patches/`) | Default Payload | Supported Status |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **FW 7.00 - 7.02** | PSFree UAF SSV | Lapse v2.04 | `700.bin`, `701.bin`, `702.bin` | GoldHEN Loaded | ✅ Fully Supported |
| **FW 7.50 - 7.55** | PSFree UAF SSV | Lapse v2.04 | `750.bin`, `751.bin`, `755.bin` | GoldHEN Loaded | ✅ Fully Supported |
| **FW 8.00 - 8.52** | PSFree UAF SSV | Lapse v2.04 | `800.bin`, `801.bin`, `803.bin`, `850.bin`, `852.bin` | GoldHEN Loaded | ✅ Fully Supported |
| **FW 9.00** | PSFree UAF SSV | Lapse v2.04 | `900.bin` (Golden Standard) | GoldHEN Loaded | 🏆 Golden Edition |
| **FW 9.03 - 9.60** | PSFree UAF SSV | Lapse v2.04 | `903.bin`, `904.bin`, `950.bin`, `960.bin` | GoldHEN Loaded | ✅ Fully Supported |
| **FW 10.00 - 11.02** | CSSFontFace UAF | Lapse / NetCtrl | `1000.bin`, `1001.bin`, `1050.bin`, `1070.bin`, `1071.bin`, `1100.bin`, `1102.bin` | GoldHEN Loaded | ✅ Fully Supported |
| **FW 11.50 - 12.02** | WebKit UAF | Lapse Engine (`chain_lapse.js`) | `1150.bin`, `1152.bin`, `1200.bin`, `1202.bin` | GoldHEN Loaded | ✅ Fully Supported |
| **FW 12.50 - 13.00** | WebKit UAF | Poops Engine (`chain_poops.js`) | `1250.bin`, `1300.bin` | GoldHEN Loaded | 🚀 Next-Gen Ready |

---

## 🧭 Architecture & Exploit Pipeline

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PS4 WebKit Web Browser                          │
│               Visits Host • Automatic Firmware Detection               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
         ┌──────────────────────────┴──────────────────────────┐
         ▼                                                     ▼
 [FW 7.00 - 9.60]                                      [FW 10.00 - 13.00]
 PSFree UAF Exploit Pipeline                           CSSFontFace / WebKit Pipeline
         │                                                     │
         ▼                                                     ▼
 Lapse v2.04 Kernel Read/Write                         Lapse / NetCtrl / Poops Pipeline
         │                                                     │
         └──────────────────────────┬──────────────────────────┘
                                    ▼
         ┌─────────────────────────────────────────────────────┐
         │             Target Kernel Stability Patches         │
         │          (6.00.bin through 13.00.bin applied)       │
         └──────────────────────────┬──────────────────────────┘
                                    ▼
         ┌─────────────────────────────────────────────────────┐
         │            GoldHEN Payload Injection (2121)         │
         │           100% Homebrew Enabler & Debug Settings    │
         └─────────────────────────────────────────────────────┘
```

---

## ✨ Key Features & UX Innovations

### 🖤 Pure 100% OLED Black Theme
- True `#000000` pitch black background designed to blend seamlessly with the controller silhouette and eliminate visible borders or seams on HDR TVs.
- Frameless, seamless interface (`Frameless Design`): all heavy dialog card boxes have been removed for an unobstructed, floating visual aesthetic.

### 🎮 Interactive In-Place Controller Overlays
- **Action Shape Buttons (Right Cluster):**
  - **▲ Triangle (Green - `#00ff88`):** Quick-selects **FW 11.00**.
  - **● Circle (Red - `#ff3344`):** Quick-selects **FW 12.50**.
  - **✖ Cross (Cyan - `#00f0ff`):** Quick-selects **FW 13.00**.
  - **□ Square (Pink - `#ff2a85`):** Quick-selects **FW 9.00**.
- **Directional D-Pad (Left Cluster):**
  - **▲ Up:** Quick-selects **FW 7.02**.
  - **◀ Left:** Quick-selects **FW 7.55**.
  - **▼ Down:** Quick-selects **FW 10.01**.
  - **▶ Right:** Quick-selects **FW 8.50**.
- **Interactive Feedback:** Hovering or tapping any button locks it to 100% brightness and provides instant visual confirmation.

### 💫 Sequential Rotating Chaser Lighting ("نظام فليشر بطيء متوالي")
- Smooth breathing RGB orbital animation (`2.8s` continuous loop).
- Right shapes orbit clockwise: **Triangle ➔ Circle ➔ Cross ➔ Square**.
- Left D-Pad orbits sequentially: **Up ➔ Left ➔ Down ➔ Right**.
- Soft, non-aggressive flasher effect that is gentle on the eyes while giving the impression of an alive, reactive controller.

### 📺 1080p Single-Screen Viewport Fit
- Perfectly calibrated responsive layout where the **Header, Controller, Exploit Controls, Launch Button, and Progress Bar** all fit in one view without vertical scrolling (no Page Up / Page Down needed).

### ⚡ Compact Centered Launch Button
- The `🚀 Start Jailbreak` button is neatly fitted around its label, horizontally centered with a glowing cyan-to-magenta gradient.

### 📊 Real-Time Neon Progress Bar
- Displays live caching percentages (0% - 100%) and multi-stage exploit execution status (`Stage 1: WebKit`, `Stage 2: Kernel ARW`, `Stage 3: Kernel Patches`, `Stage 4: GoldHEN`).
- Includes a collapsible debug drawer for optional technical inspection.

### 🛡️ 100% Offline AppCache
- Offline cache page (`cache.html`) fully styled to match the main host with zero frames.
- Bundles all 73 essential files in `cache.manifest` & `cache.appcache` for complete internet-free operation after initial visit.

---

## 📁 Project File Structure

```
960N-master/
├── index.html                  # Master Exploit Host (FW 7.00 - 13.00)
├── cache.html                  # 100% Offline AppCache Installer Page
├── run_lapse.html              # Dedicated Lapse Runner (FW 11.00 - 12.02)
├── run_poops.html              # Dedicated Poops Runner (FW 12.50 - 13.00)
├── includes/
│   └── style.css               # OLED Black Stylesheet, Neon Progress Bar & Chaser Animations
├── bundle.js                   # Master PSFree & Embedded Patches Bundle (7.00 - 9.60)
├── chain_lapse.js              # Lapse Exploit Chain Logic
├── chain_poops.js              # Poops Exploit Chain Logic
├── core.js                     # Exploit Primitives & Helper Routines
├── int64.js                    # 64-bit Integer Math Helper
├── mem.js                      # Memory Read/Write Wrapper
├── ps4_offsets.js              # WebKit & Kernel Structure Offsets
├── rpc_worker.js               # Web Worker for RPC Operations
├── payload.bin                 # GoldHEN Master Binary
├── patches/                    # AIO Kernel Stability Patches (6.00.bin to 1300.bin)
│   ├── 600.bin ... 960.bin
│   ├── 1000.bin ... 1102.bin
│   ├── 1150.bin ... 1202.bin
│   └── 1250.bin ... 1300.bin
├── src/                        # NetCtrl, Lapse & WebKit Source Components
│   └── ps4/
│       ├── main.js
│       └── patches/            # Fallback Kernel Patches
├── LP.jpg                      # Original Let's Play Cyber Artwork
├── LP_controller.png           # Center-Cropped High-Res Controller Asset
├── logo.png                    # Alternate Cyberpunk Neon Controller Art
├── icon0.png                   # PlayStation Host Icon
├── cache.manifest              # HTML5 Offline Application Cache Manifest
├── cache.appcache              # AppCache Fallback Manifest
├── server.py                   # Multi-Threaded Python Server with Auto-IP Discovery
├── RUN_SERVER.bat              # One-Click Local Server Launcher
├── UPLOAD_TO_GITHUB.bat        # One-Click GitHub Synchronization Batch
├── upload_to_github.ps1        # Automated Git Push & Deploy PowerShell Script
└── README.md                   # Comprehensive Repository Documentation
```

---

## 🚀 Quick Start & Local Hosting

### Method 1: Running the Local Server (Recommended for Home LAN)
1. Ensure **Python 3.x** is installed on your PC.
2. Double-click **`RUN_SERVER.bat`** in the project directory.
3. The server starts automatically and displays your local IP address:
   ```
   ============================================================
     LET'S PLAY • PS4 MULTI-FIRMWARE EXPLOIT SERVER (7.00 - 13.00)
     Developed by Ahmed Elattar
   ============================================================
   Local URL:    http://127.0.0.1:8080/
   Network LAN:  http://192.168.1.15:8080/
   ============================================================
   ```
4. On your PS4, open the **Internet Browser** and navigate to `http://192.168.1.XX:8080/`.

---

## 🛡️ PS4 Offline Caching Guide

1. Open your PS4 Web Browser and visit:
   ```
   http://<YOUR_IP>:8080/cache.html
   ```
2. The neon progress bar will fill from **0% to 100%**, downloading all 73 exploit components into local browser storage.
3. Once the green badge displays **`✔ 100% Cached Offline`**, you can:
   - Disconnect the PS4 from Wi-Fi / LAN completely.
   - Bookmark `http://<YOUR_IP>:8080/index.html` (or User's Guide).
4. Launch the jailbreak whenever you turn on your PS4 without any network connection!

---

## 🐙 Uploading to GitHub

To publish this host to your GitHub account (or GitHub Pages):

1. Double-click **`UPLOAD_TO_GITHUB.bat`**.
2. If prompted, paste your GitHub repository URL (e.g., `https://github.com/YourUsername/PS4-LetsPlay-Host.git`).
3. The script will automatically stage all files, commit them cleanly, and push to the `main` branch.
4. Enable **GitHub Pages** under `Settings ➔ Pages ➔ Source: main branch` to host online for free!

---

## 👑 Credits & Acknowledgements

- **Lead Architecture & Host Design:** **Ahmed Elattar**
- **Kernel & WebKit Vulnerability Researchers:**
  - **TheFloW** (Lapse Kernel Exploit, WebKit UAF)
  - **ChendoChap** (PSFree WebKit Exploit)
  - **Sleirsgoevy** (PS4 WebKit & Kernel chains, Poops)
  - **SiSTRo** (GoldHEN Payload & Homebrew Enabler)
  - **Al-Azif** (PS4 Exploit Host tools & documentation)
  - **Specter**, **fail0verflow**, and the entire **PlayStation 4 Homebrew Community**.

---

<div align="center">
  <sub>Developed with ❤️ by <strong>Ahmed Elattar</strong> • Released for educational and research purposes.</sub>
</div>

# 🌙 Jutge Dark Mode

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![Manifest](https://img.shields.io/badge/Manifest-V3-brightgreen.svg)
![Status](https://img.shields.io/badge/status-Web_Store_Pending-orange.svg)

A lightweight, custom-built Chrome Extension that brings a sleek and eye-friendly dark theme to [jutge.org](https://jutge.org), the programming practice platform.

## 🎯 The Problem
Jutge.org is an excellent resource for university students practicing algorithmic problem-solving and competitive programming. However, the platform is currently only available in a blindingly bright light mode. For computer science students who often code late into the night, staring at a stark white screen leads to severe eye strain and fatigue. 

**Jutge Dark Mode** solves this by injecting a carefully crafted, high-contrast dark CSS theme directly into the site, making late-night coding sessions comfortable and accessible.

## ✨ Features
* **Full Coverage:** Darkens the index, problem lists, and specific problem descriptions.
* **Optimized Readability:** Uses soft dark grays (`#181818`, `#242424`) instead of harsh pure blacks to reduce eye fatigue.
* **Code & Math Support:** Intelligently handles code blocks, syntax highlighting, and inverts bright white math formula images so they blend seamlessly into the dark background.
* **Elegant UI:** Features a beautifully designed pop-up menu that provides users with a simple toggle switch to turn dark mode on or off instantly.
* **Lightweight:** Pure CSS injection with zero background scripts draining your browser's memory.

## 🛠️ Technologies Used
* **Chrome Extension API:** Manifest V3
* **Frontend:** CSS3 (Custom styling and overrides), HTML5

## 📁 Project Structure

```text
Jutge-Dark-Mode/
├── 📄 manifest.json   # Extension metadata and permissions
├── 📄 popup.html      # UI structure of the extension popup
├── 📄 README.md       # Project documentation
├── 📄 LICENSE         # Open-source license terms
├── 📄 .gitignore      # Ignored files for version control
├── 📂 css/            
│   └── 🎨 dark.css    # Core dark theme injection styles
├── 📂 docs/           # Additional documentation and media resources
├── 📂 icons/          # Extension icons for Chrome UI
│   ├── 🖼️ icon16.png
│   └── 🖼️ icons-64.png
└── 📂 js/             
    ├── 📜 content.js  # Injected script that applies the theme overrides
    └── 📜 popup.js    # Interactive logic for the extension popup
```

## 🚀 How to Install Locally

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/daoudwaheed/Jutge-Dark-Mode.git
   ```

2. **Open Chrome Extensions**
   Navigate to `chrome://extensions/` in your Google Chrome browser.

3. **Enable Developer Mode**
   Toggle the **Developer mode** switch in the top right corner of the page.

4. **Load the Extension**
   Click the **Load unpacked** button in the top left corner. Select the `Jutge-Dark-Mode` folder you cloned or downloaded in Step 1.

5. **Test it out!**
   Navigate to [jutge.org](https://jutge.org) and enjoy the improved coding experience in dark mode.

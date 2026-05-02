# ⬛ QR Studio — Pro QR Code Generator

> A professional, fully offline QR code generator built as a single HTML file.  


![QR Studio Screenshot](screenshot.png)

---

## ✨ Features

- **10 themes** — Corporate, Minimal, Premium, Cyberpunk, Matrix, Neon, Forest, Fire, Ice, Studio dark
- **5 dot shapes** — Square, Rounded, Circle, Diamond, Cross
- **4 corner eye styles** — Square, Rounded, Circle, Leaf
- **Center logo upload** — PNG/JPG, with white padding option, auto H error correction
- **Gradient dots** — two-tone gradient using theme accent colors
- **Glow / bloom** — canvas shadow blur for gaming-style aesthetics
- **Transparent background** — exports alpha PNG for use on any surface
- **Frame & label** — top or bottom banner with custom text baked into export
- **8 quick-fill templates** — URL, Email, Phone, WiFi, SMS, vCard (CPA-ready), PayPal.me, Geo
- **3 export formats** — PNG (any size up to 600px), SVG (infinite scale), Copy to clipboard
- **100% offline** — no server, no database, no tracking

---

## 🚀 How to Use (Windows)

1. Download or clone this repo
2. Double-click `index.html`
3. It opens in your browser — works immediately
4. *(Optional)* Pin to taskbar: open Chrome → 3-dot menu → **More tools → Create shortcut → Open as window**

> **Internet required** only for the `qrcode-generator` CDN script and Google Fonts on first load.  
> For full offline use, see [Offline Setup](#offline-setup) below.

---

## 📁 Project Structure

```
qr-studio/
├── index.html        ← The entire app (HTML + CSS + JS, single file)
└── README.md         ← This file
```

---

## 🛠 Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Structure | **HTML5** | Semantic, accessible markup |
| Styling | **CSS3** — custom properties, grid, flexbox, canvas | Zero-dependency design system |
| Logic | **Vanilla JavaScript (ES2020)** | No framework overhead |
| QR encoding | **qrcode-generator v1.4.4** (CDN) | Lightweight, battle-tested Reed-Solomon encoder |
| Rendering | **HTML5 Canvas API** | Full pixel control: shapes, gradients, glow, logo compositing |
| Fonts | **Google Fonts** — Syne + DM Mono | Distinctive typographic personality |
| Export | `canvas.toDataURL()`, `Blob`, `ClipboardItem` | Native browser APIs, no libraries needed |

### Why no React / Vue / framework?

This project is intentionally framework-free. The goal was to prove that a polished, feature-rich tool can be shipped as a **single HTML file** — no `npm install`, no build pipeline, no node_modules. It opens instantly, works offline (after first load), and can be emailed or shared as a single attachment.

---

## 🎨 Design Decisions

- **Dark default theme** — easier on eyes for daily professional use
- **Syne typeface** — geometric, modern, memorable — avoids the over-used Inter/Roboto look
- **Sidebar + canvas layout** — mirrors professional design tools (Figma, Canva)
- **Live preview** — every toggle and slider re-renders instantly, no "Generate" button needed
- **CPA-specific templates** — vCard with firm fields, PayPal.me, invoice email pre-filled

---

## 📦 Offline Setup

To use with zero internet dependency:

1. Download [qrcode.js](https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js) and save next to `index.html`
2. In `index.html`, replace:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js"></script>
   ```
   with:
   ```html
   <script src="qrcode.js"></script>
   ```
3. Remove the Google Fonts `<link>` (falls back to system sans-serif)

---

## 🗺 Roadmap / Future Ideas

- [ ] Batch generation from CSV
- [ ] QR code scanner / decoder tab
- [ ] Save/load presets locally (localStorage)
- [ ] Dynamic QR codes (redirect URL tracking)
- [ ] Electron wrapper for true native desktop app

---

## 📜 License

MIT — free to use, modify, and share.

---

*Built with pure HTML, CSS, and JavaScript. No frameworks harmed.*

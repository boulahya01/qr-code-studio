qr-studio/
├── electron/
│   ├── main.js
│   └── preload.js
├── src/
│   ├── components/
│   │   ├── ui/ (shadcn components)
│   │   ├── QRGenerator/
│   │   │   ├── index.jsx
│   │   │   ├── ThemePanel.jsx
│   │   │   ├── ShapePanel.jsx
│   │   │   ├── LogoPanel.jsx
│   │   │   ├── FramePanel.jsx
│   │   │   └── QRCanvas.jsx
│   │   ├── BatchCSV/
│   │   │   └── index.jsx
│   │   ├── Scanner/
│   │   │   └── index.jsx
│   │   ├── Presets/
│   │   │   └── index.jsx
│   │   └── Layout/
│   │       ├── Sidebar.jsx
│   │       └── Header.jsx
│   ├── lib/
│   │   ├── qr.js
│   │   ├── presets.js
│   │   └── storage.js
│   ├── hooks/
│   │   └── useQRStore.js
│   ├── store/
│   │   └── qrStore.js (Zustand)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
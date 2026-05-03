export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0C0C0F',
        surface: '#13131A',
        panel: '#1A1A24',
        muted: '#666680',
        accent: '#7B61FF',
        'accent-2': '#00E5FF',
        gold: '#FFD166',
        danger: '#FF4D6D',
        success: '#06D6A0',
      },
      fontFamily: {
        syne: ["'Syne'", 'sans-serif'],
        mono: ["'DM Mono'", 'monospace'],
      },
      borderRadius: {
        r: '10px',
        'r-sm': '6px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        medi: {
          bg: '#0a0a0a',
          panel: '#141414',
          border: '#2a2a2a',
        },
        accent: {
          DEFAULT: '#D4AF37',
          light: '#E8C766',
          dark: '#A8862B',
        },
        urgent: {
          from: '#FF2D55',
          to: '#E91E63',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        accentGlow: '0 0 0 1px rgba(212,175,55,0.4), 0 8px 24px -4px rgba(212,175,55,0.25)',
        accentGlowLg: '0 0 0 1px rgba(212,175,55,0.5), 0 12px 40px -6px rgba(212,175,55,0.35)',
      },
      backgroundImage: {
        'urgent-gradient': 'linear-gradient(90deg, #FF2D55 0%, #E91E63 100%)',
      },
    },
  },
  plugins: [],
}

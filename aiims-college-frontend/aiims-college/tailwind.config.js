/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        surface: '#FFFFFF',
        cloud: '#F1F5F9',
        line: '#E2E8F0',
        muted: '#64748B',
        brand: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E3A8A',
          soft: '#EFF4FF',
        },
        gold: '#B45309',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 12px 32px -12px rgba(15,23,42,0.12)',
      },
    },
  },
  plugins: [],
}

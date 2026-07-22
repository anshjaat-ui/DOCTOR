/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        surface: '#FFFFFF',
        cloud: '#F4F6F4',
        line: '#E6E9E6',
        muted: '#6B7280',
        brand: {
          DEFAULT: '#0F7A4B',
          light: '#16A34A',
          dark: '#0B5C39',
          soft: '#EAF6EF',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,10,10,0.04), 0 12px 32px -12px rgba(10,10,10,0.12)',
        cardHover: '0 1px 2px rgba(10,10,10,0.06), 0 24px 48px -12px rgba(15,122,75,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#e8fdf5',
          100: '#c5fbe8',
          200: '#8ff4d3',
          300: '#54e3bc',
          400: '#2cd0a3',
          500: '#15b885',
          600: '#0c9669',
          700: '#0b7756',
          800: '#0d5f47',
          900: '#0e4e3a',
        },
        ink: '#0a0a0a',
        slate: '#f6f7f8',
        stone: '#f3f3f4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        'fade-in': 'fadeIn 1.2s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

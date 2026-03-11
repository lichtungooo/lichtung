/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-dark': '#080610',
        'cream': '#FDFAF2',
        'gold-light': '#F5E6C8',
        'gold': '#D4A843',
        'gold-deep': '#B8841F',
        'earth': '#6B3A1F',
        'earth-deep': '#3D1C08',
        'earth-mid': '#4A2210',
        'warm-white': '#FFFEF9',
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'breathe-slow': 'breathe 6s ease-in-out infinite',
        'float': 'float-up 6s ease-in-out infinite',
        'ring-expand': 'ring-expand 3s ease-out infinite',
        'ring-expand-2': 'ring-expand 3s ease-out infinite 1s',
        'ring-expand-3': 'ring-expand 3s ease-out infinite 2s',
        'ray-pulse': 'ray-pulse 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'ring-expand': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'ray-pulse': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 40px 10px rgba(212, 168, 67, 0.3)' },
          '50%': { boxShadow: '0 0 80px 30px rgba(212, 168, 67, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

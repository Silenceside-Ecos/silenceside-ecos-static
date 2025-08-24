/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,.08)'
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.06) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(800px circle at 50% -20%, rgba(56,189,248,.25), transparent 40%), radial-gradient(600px circle at 0% 60%, rgba(99,102,241,.15), transparent 40%)'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px'
      }
    }
  },
  plugins: [],
}

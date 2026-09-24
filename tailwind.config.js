/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712',
          surface: '#0b0f19',
          card: '#111827',
          border: 'rgba(255, 255, 255, 0.1)'
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          card: '#ffffff',
          border: 'rgba(226, 232, 240, 0.8)'
        },
        brand: {
          blue: '#38bdf8',
          purple: '#c084fc',
          cyan: '#22d3ee',
          deepBlue: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
};

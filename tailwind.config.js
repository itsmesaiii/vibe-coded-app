/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a6fa5',
          light: '#eef2f7',
          dark: '#3a5985'
        },
        blue: {
          500: '#3b82f6',
        },
        purple: {
          500: '#a855f7',
        },
        green: {
          500: '#22c55e',
        },
        orange: {
          500: '#f97316',
        },
        red: {
          500: '#ef4444',
        },
        yellow: {
          500: '#eab308',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
    },
  },
  plugins: [],
} 

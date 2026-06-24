/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4F6AF6',
        'brand-dark': '#2D3A6A',
        'brand-muted': '#5A5D7A',
        'brand-bg': '#F8FAFC',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '24px',
        'pill': '50px',
      },
      boxShadow: {
        'brand': '0 10px 20px rgba(79, 106, 246, 0.08)',
        'brand-lg': '0 15px 30px rgba(0, 0, 0, 0.1)',
        'brand-button': '0 10px 20px rgba(37,102,245,0.25)',
        'brand-button-hover': '0 12px 24px rgba(37,102,245,0.35)',
        'brand-card': '0 20px 40px rgba(0, 0, 0, 0.06)',
        'brand-overlay': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'brand-service-hover': '0 15px 30px rgba(79, 106, 246, 0.1)',
        'brand-stats': '0 20px 40px rgba(79, 106, 246, 0.2)',
        'brand-dropdown': '0 10px 40px -10px rgba(0, 0, 15)',
      }
    },
  },
  plugins: [],
}


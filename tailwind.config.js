/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          sage: '#A8B5A0',
          terra: '#C97D60',
          blue: '#8B9EB7',
          beige: '#D4C5B9',
          charcoal: '#1A1A1A',
          gray: {
            800: '#2D2D2D',
            700: '#4A4A4A',
            400: '#A0A0A0',
            200: '#E5E5E5',
            100: '#F5F5F5',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Helvetica Neue', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

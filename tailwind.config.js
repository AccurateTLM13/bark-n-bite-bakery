/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF8',
          100: '#FDF9F1',
          200: '#FAF2E3',
          300: '#F7EBD5',
          400: '#F4E4C7',
          500: '#F1DDB9',
          600: '#EDD6AB',
          700: '#E9CF9D',
          800: '#E5C88F',
          900: '#E1C181',
        },
        brown: {
          50: '#F7F3F0',
          100: '#EDE4DD',
          200: '#D4C0B1',
          300: '#BB9C85',
          400: '#A27859',
          500: '#8B5A3C',
          600: '#6B4423',
          700: '#5C3A21',
          800: '#4A2F1A',
          900: '#2D2014',
        },
        terracotta: {
          50: '#FDF5F3',
          100: '#FBEAE7',
          200: '#F7D5CF',
          300: '#F3C0B7',
          400: '#EFAB9F',
          500: '#EB9687',
          600: '#D2691E',
          700: '#B8571A',
          800: '#9E4516',
          900: '#843312',
        },
      },
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-delayed-2': 'float 6s ease-in-out infinite 4s',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'floating': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'lift': '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};

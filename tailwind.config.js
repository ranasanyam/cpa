/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'catamaran': 'Catamaran'
      },
      colors: {
        primary: {
          100: '#00387A',
          200: '#002C60'
        },
        secondary: '#F26522',
        light: {
          100: '#ffffff',
          200: '#D9D9D9',
          300: '#747677',
        },
        dark: {
          400: '#000000',
        }
      },
      backgroundImage: {
        "home": "url('/public/images/slide-home.jpg')",
        "services": "url('/public/images/services.png')",
        "finance": "url('/public/images/finance.png')",
        "slide-home-1": "url('./public/images/man-slide.jpg')",
        "slide-home-2": "url('./public/images/woman-slide.jpg')",
        "slide-home-3": "url('./public/man-slide-2.jpg')"
      },
      perspective: {
        '1000': '1000px',
      },
      transformOrigin: {
        'center-center': 'center center',
      },
      rotate: {
        '-180': '-180deg',
        '360': '360deg',
      },
    },
    screens: {
      xxs: '350px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: [],
}


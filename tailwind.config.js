/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto Flex'
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
        "slide-home-1": "url('./public/images/man-slide.jpg')",
        "slide-home-2": "url('./public/images/woman-slide.jpg')",
        "slide-home-3": "url('./public/man-slide-2.jpg')"
      }
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: [],
}


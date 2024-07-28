/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('./assets/images/background/background-homepage.png')",
        'banner-header': "url('./assets/images/background/bg-header.png')",
        'banner-header-bot': "url('./assets/images/background/background-bottom-header.png')"
      },
      colors: {
        "yellow-green": "#B6E802",
        "purple": "#3D1A8E",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

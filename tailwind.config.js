/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        'custom-purple': '#601FEB',
        'custom-purple-transparent': 'rgba(96, 31, 235, 0)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundPosition: {
        'custom-position': 'left top, right bottom',
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

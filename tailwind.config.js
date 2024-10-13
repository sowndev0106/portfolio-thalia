/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('./assets/images/background/background-homepage.png')",
        'banner-header': "url('./assets/images/background/background-bottom-header.png')",
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
        moveUp: {
          '0%': { transform: 'translateY(200px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        moveUp: 'moveUp 0.5s ease-out forwards',
      },
    },
  },
  safelist: [
    'text-purple',
    'border-purple',
  ],
  plugins: [require('tailwind-scrollbar-hide')],
}

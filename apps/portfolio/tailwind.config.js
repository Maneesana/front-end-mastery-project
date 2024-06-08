/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '300px',
      md: '820px',
      lg: '1200px',
    },

    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
        'bouncy-shaky': 'bouncy-shaky 3s ease-out infinite',
      },
      keyframes: {
        'bouncy-shaky': {
          '0%, 25%': { transform: 'translateX(-5px)' },
          '25%, 50%': { transform: 'rotate(-5deg)' },
          '50%, 75%': { transform: 'rotate(3deg)' },
          '90%': { transform: 'rotate(0deg)' },
          '75%, 100%': {
            transform: 'translateX(5px)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'portfolio-dark-background': '#1E1E1E',
        'portfolio-foreground-light': '#FFF',
        'portfolio-highlight': '#FD6F00',

        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
};

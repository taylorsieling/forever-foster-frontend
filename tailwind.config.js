module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Amaranth', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        rosebud: 'var(--clr-rose-bud)',
        manhattan: 'var(--clr-manhattan)',
        opal: 'var(--clr-opal)',
        snuff: 'var(--clr-snuff)',
        peach: 'var(--clr-light-peach)',
        coral: 'var(--clr-peach)',
        dusty: 'var(--clr-dusty-blue)',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}
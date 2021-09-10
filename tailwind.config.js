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
        mint: 'var(--clr-mint)',
        rosewater: 'var(--clr-rosewater)',
        melon: 'var(--clr-melon)',
        marigold: 'var(--clr-marigold)',
        olive: 'var(--clr-olive)',
        warmgray: 'var(--clr-warm-gray)',
        darkgray: 'var(--clr-dark-gray)',
        blkgray: 'var(--clr-blkgray)',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}
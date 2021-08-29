module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#FF4C4A',
        secondary: '#53B3FF',
        background: '#FAFAFA',
        disable: '#A1A1A1',
        'button-primary': '#FFC1C1',
        'button-secondary': '#C9E2FF'
      },
      textColor: {
        primary: '#2E2E2E',
        secondary: '#3E3E3E',
        caption: '#4D4D4D',
        active: '#FF4C4A'
      },
      textOpacity: {
        65: '0.65',
        85: '0.85'
      },
      minWidth: {
        dialog: '280px',
        button: '102px'
      }
    },
    fill: theme => ({
      primary: theme('colors.primary'),
      disable: theme('colors.disable')
    })
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}

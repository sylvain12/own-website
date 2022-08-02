/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['var(--ff-sans)'],
      serif: ['var(--ff-serif)']
    },
    colors: {
      main: {
        DEFAULT: '#063970',
        light: '#C7C7C7',
      },
      second: '#da532c'
    },
    extend: {},
  },
  plugins: [],
}

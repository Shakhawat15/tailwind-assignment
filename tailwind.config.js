module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'main': "url('./../images/bg-pattern-light.svg')",
      },
      container: {
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
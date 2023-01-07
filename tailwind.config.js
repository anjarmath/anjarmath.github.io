module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#3CCF4E',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl' : '1320px',
        'hp-aja': {'max': '640px'},
      }
    },
  },
  plugins: [],
}

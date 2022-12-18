module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#4f46e5',
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

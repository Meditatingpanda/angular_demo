/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        github: {
          bg: '#0d1117',
          'bg-secondary': '#161b22',
          border: '#30363d',
          'text-primary': '#c9d1d9',
          'text-secondary': '#8b949e',
          link: '#58a6ff',
          'btn-bg': '#21262d',
          'btn-hover': '#30363d',
          'btn-border': 'rgba(240, 246, 252, 0.1)',
          'header-bg': '#010409',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
    },
  },
  plugins: [],
};

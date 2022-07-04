const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#27292e',
          DEFAULT: '#1c1e1f',
          dark: '#181a1b'
        }
      }
    }
  },
  plugins: []
});

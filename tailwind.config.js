module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'border': 'inset 2px 2px 2px, inset -2px -2px 2px, inset -2px 2px 2px, inset 2px -2px 2px, 2px 2px 2px #E6F4E1, -2px -2px 2px, -2px 2px 2px, 2px -2px 2px',
        'button': 'inset 2px 2px 5px #f3f3f3, inset -2px -2px 5px #f3f3f3, 2px 2px 5px #d1d1d1, -2px -2px 5px #d1d1d1',
        'txtcontainer': '1rem 0 rgb(15 23 42), -1rem 0 rgb(15 23 42)'      
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
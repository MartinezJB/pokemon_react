module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'border': 'inset 2px 2px 2px, inset -2px -2px 2px, inset -2px 2px 2px, inset 2px -2px 2px, 2px 2px 2px #E6F4E1, -2px -2px 2px, -2px 2px 2px, 2px -2px 2px',
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
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner': 'inset 2px 2px 2px #AEB49E, inset -2px -2px 2px #AEB49E, 2px 2px 2px #E6F4E1, -2px -2px 2px #E6F4E1'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-18%)' },
          '50%': { transform: 'translateY(-15%)' },
        }
      }
    },
  },
  plugins: [],
}
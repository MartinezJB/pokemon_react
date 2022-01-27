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
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
          '50%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
        },
        player: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translate(100%, -30%)' },
        },
        enemy: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translate(-100%, 30%)' },
        },

      },
      animation: {
        'attack-player': 'player 1s ease-in alternate infinite',
        'attack-enemy': 'enemy 1s ease-in alternate infinite',
      }
    },
  },
  plugins: [],
}
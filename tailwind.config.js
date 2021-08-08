const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  mode: 'jit',
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: [
      './packages/**/*.{html,ts}',
      './packages/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover', 'group-hover']
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/typography'),require('@tailwindcss/forms')],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hanken': ['"Hanken Grotesk", sans-serif'],
      },
      colors: {
        // Primary
          'primary-light-red': 'hsl(0, 100%, 67%)',
          'primary-orangey-yellow': 'hsl(39, 100%, 56%)',
          'primary-green-teal': 'hsl(166, 100%, 37%)',
          'primary-cobalt-blue': 'hsl(234, 85%, 45%)',

        // Neutral
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-pale-blue': 'hsl(221, 100%, 96%)',
        'neutral-light-lavender': 'hsl(241, 100%, 89%)',
        'neutral-dark-gray-blue': 'hsl(224, 30%, 27%)',
        
        // Gradients
        'gradients-background-light-slate-blue': 'hsl(252, 100%, 67%)',
        'gradients-background-light-royal-blue': 'hsl(241, 81%, 54%)',
        'gradients-circle-violet-blue': 'hsla(256, 72%, 46%, 1)',
        'gradients-circle-persian-blue': 'hsla(241, 72%, 46%, 0)',

      },
      screens: {
        // @media (min-width: ...) {}
          'xs': '475px',  // => @media (min-width: 475px) { ... }
        
        // @media (max-width: ...) {}
          // 'max-screen-xs': {'max': '425px'}, // => @media (max-width: 425px) { ... }
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },

      typography: ({ theme }) => ({
        dark: {
          css: {
            color: theme('colors.zinc.400'),
            figcaption: {
              color: theme('colors.zinc.400')
            },
            a: {
              color: theme('colors.pink.400'),
              '&:hover': {
                color: theme('colors.pink.300')
              },
              code: { color: theme('colors.pink.400') },
              '*': {
                color: theme('colors.pink.400'),
                '&:hover': {
                  color: theme('colors.pink.300')
                }
              }
            },
            'strong > a, a > strong': {
              color: theme('colors.pink.400')
            },
            blockquote: {
              borderLeftColor: theme('colors.zinc.700'),
              color: theme('colors.zinc.300')
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.white')
            },
            'h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a': {
              color: theme('colors.white'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                color: theme('colors.white')
              }
            },
            code: {
              padding: '3px 5px',
              borderRadius: 5,
              color: theme('colors.white'),
              background: theme('colors.zinc.800')
            },
            pre: {
              background: '#263238'
            },
            'pre > code': {
              background: 'none',
              padding: 0,
              fontSize: '20px !important'
            },
            hr: { borderColor: theme('colors.zinc.700') },
            strong: { color: theme('colors.white') },
            thead: {
              color: theme('colors.zinc.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.zinc.700')
              }
            },
            mark: {
              background: theme('colors.yellow.100')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './locales/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './rc-ui/**/*.vue',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        gray: colors.blueGray,
        orange: colors.orange,
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            figcaption: {
              color: theme('colors.gray.600'),
            },
            a: {
              color: theme('colors.indigo.600'),
              '&:hover': {
                color: theme('colors.indigo.400'),
              },
              code: { color: theme('colors.indigo.400') },
              '*': {
                color: theme('colors.indigo.400'),
                '&:hover': {
                  color: theme('colors.indigo.300'),
                },
              },
            },
            'strong > a, a > strong': {
              color: theme('colors.indigo.400'),
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.400'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.800'),
            },
            code: {
              padding: '3px 5px',
              borderRadius: 5,
              color: theme('colors.gray.200'),
              background: theme('colors.gray.800'),
            },
            'pre > code': {
              background: 'none',
              padding: 0,
            },
            hr: { borderColor: theme('colors.gray.200') },
            strong: { color: theme('colors.gray.800') },
            thead: {
              color: theme('colors.gray.700'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.200'),
              },
            },
            mark: {
              background: theme('colors.yellow.100'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

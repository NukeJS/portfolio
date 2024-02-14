import type { Config } from 'tailwindcss';

export default <Config>{
  content: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ["'Work Sans'", 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
};

export enum Technology {
  HTML,
  CSS,
  JAVASCRIPT,
  LARAVEL,
  GIT,
  MONGODB,
  MYSQL,
  NGINX,
  NUXT,
  PHP,
  PYTHON,
  SCSS,
  TAILWIND_CSS,
  TYPESCRIPT,
  VUE,
  WORDPRESS,
  WOOCOMMERCE,
  BOOTSTRAP,
  POSTCSS,
  GULP,
  JQUERY,
}

export interface TechnologyInfo {
  name: string;
  image_name: string;
}

export const technologies = new Map<Technology, TechnologyInfo>([
  [
    Technology.HTML,
    {
      name: 'HTML',
      image_name: 'html',
    },
  ],
  [
    Technology.CSS,
    {
      name: 'CSS',
      image_name: 'css',
    },
  ],
  [
    Technology.JAVASCRIPT,
    {
      name: 'JavaScript',
      image_name: 'javascript',
    },
  ],
  [
    Technology.LARAVEL,
    {
      name: 'Laravel',
      image_name: 'laravel',
    },
  ],
  [
    Technology.GIT,
    {
      name: 'Git',
      image_name: 'git',
    },
  ],
  [
    Technology.MONGODB,
    {
      name: 'MongoDB',
      image_name: 'mongodb',
    },
  ],
  [
    Technology.MYSQL,
    {
      name: 'MySQL',
      image_name: 'mysql',
    },
  ],
  [
    Technology.NGINX,
    {
      name: 'NGINX',
      image_name: 'nginx',
    },
  ],
  [
    Technology.NUXT,
    {
      name: 'Nuxt',
      image_name: 'nuxtjs',
    },
  ],
  [
    Technology.PHP,
    {
      name: 'PHP',
      image_name: 'php',
    },
  ],
  [
    Technology.PYTHON,
    {
      name: 'Python',
      image_name: 'python',
    },
  ],
  [
    Technology.SCSS,
    {
      name: 'SCSS',
      image_name: 'sass',
    },
  ],
  [
    Technology.TAILWIND_CSS,
    {
      name: 'Tailwind CSS',
      image_name: 'tailwindcss',
    },
  ],
  [
    Technology.TYPESCRIPT,
    {
      name: 'TypeScript',
      image_name: 'typescript',
    },
  ],
  [
    Technology.VUE,
    {
      name: 'Vue',
      image_name: 'vuejs',
    },
  ],
  [
    Technology.WORDPRESS,
    {
      name: 'WordPress',
      image_name: 'wordpress',
    },
  ],
  [
    Technology.WOOCOMMERCE,
    {
      name: 'WooCommerce',
      image_name: 'woocommerce',
    },
  ],
  [
    Technology.BOOTSTRAP,
    {
      name: 'Bootstrap',
      image_name: 'bootstrap',
    },
  ],
  [
    Technology.POSTCSS,
    {
      name: 'PostCSS',
      image_name: 'postcss',
    },
  ],
  [
    Technology.GULP,
    {
      name: 'Gulp',
      image_name: 'gulp',
    },
  ],
  [
    Technology.JQUERY,
    {
      name: 'jQuery',
      image_name: 'jquery',
    },
  ],
]);

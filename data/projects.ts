import { Technology } from './technologies';

export interface Project {
  name: string;
  image_name: string;
  slug: string;
  description: string;
  links: {
    external?: string;
    github?: string;
  };
  technologies: Technology[];
}

export default <Project[]>[
  {
    name: 'Meerstaete',
    image_name: 'meerstaete',
    slug: 'meerstaete',
    description: 'A WordPress website.',
    links: {
      external: 'https://vergaderlocatiemeerstaete.nl/',
    },
    technologies: [
      Technology.HTML,
      Technology.SCSS,
      Technology.BOOTSTRAP,
      Technology.GULP,
      Technology.JAVASCRIPT,
      Technology.PHP,
      Technology.WORDPRESS,
    ],
  },
  {
    name: 'Paais',
    image_name: 'paais',
    slug: 'paais',
    description: 'A WooCommerce webshop.',
    links: {
      external: 'https://paais.nl/',
    },
    technologies: [
      Technology.HTML,
      Technology.CSS,
      Technology.POSTCSS,
      Technology.TAILWIND_CSS,
      Technology.TYPESCRIPT,
      Technology.PHP,
      Technology.WORDPRESS,
      Technology.WOOCOMMERCE,
    ],
  },
  {
    name: 'Van Harte',
    image_name: 'van-harte',
    slug: 'van-harte',
    description: 'A WordPress website.',
    links: {
      external: 'https://vanharte-haren.nl/',
    },
    technologies: [
      Technology.HTML,
      Technology.CSS,
      Technology.POSTCSS,
      Technology.TAILWIND_CSS,
      Technology.TYPESCRIPT,
      Technology.PHP,
      Technology.WORDPRESS,
    ],
  },
  {
    name: 'Publiek',
    image_name: 'publiek',
    slug: 'publiek',
    description: 'A WordPress website.',
    links: {
      external: 'https://publiek.com/',
    },
    technologies: [
      Technology.HTML,
      Technology.CSS,
      Technology.POSTCSS,
      Technology.TAILWIND_CSS,
      Technology.TYPESCRIPT,
      Technology.PHP,
      Technology.WORDPRESS,
    ],
  },
  {
    name: 'GeWoon',
    image_name: 'gewoon',
    slug: 'gewoon',
    description: 'A WordPress website.',
    links: {
      external: 'https://gewoonbegeleiding.nl/',
    },
    technologies: [
      Technology.HTML,
      Technology.CSS,
      Technology.POSTCSS,
      Technology.TAILWIND_CSS,
      Technology.TYPESCRIPT,
      Technology.PHP,
      Technology.WORDPRESS,
    ],
  },
];

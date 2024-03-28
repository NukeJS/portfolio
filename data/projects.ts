import { Technology } from './technologies';

export interface Project {
  name: string;
  image: {
    name: string;
    extension?: string;
  };
  slug: string;
  description: string;
  color?: string;
  links: {
    external?: string;
    github?: string;
  };
  technologies: Technology[];
}

export default <Project[]>[
  {
    name: 'Back to code',
    image: {
      name: 'back-to-code',
    },
    color: '#1e1e21',
    slug: 'back-to-code',
    description: 'A WordPress website.',
    links: {
      external: 'https://backtocode.nl/',
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
    name: 'Kupers Bedrijfsjurist',
    image: {
      name: 'kupers-bedrijfsjurist',
    },
    slug: 'kupers-bedrijfsjurist',
    description: 'A WordPress website.',
    links: {
      external: 'https://kupers-bedrijfsjurist.nl/',
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
    name: 'Groninger Kracht',
    image: {
      name: 'groninger-kracht',
    },
    slug: 'groninger-kracht',
    description: 'A WordPress website.',
    links: {
      external: 'https://groningerkracht.nl/',
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
    name: 'Sciva',
    image: {
      name: 'sciva',
    },
    slug: 'sciva',
    description: 'A WordPress website.',
    links: {
      external: 'https://sciva.nl/',
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
    name: 'WIJS Groningen',
    image: {
      name: 'wijs-groningen',
    },
    color: '#4B4495',
    slug: 'wijs-groningen',
    description: 'A WordPress website.',
    links: {
      external: 'https://wijsgroningen.nl/',
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
    name: 'First2Find',
    image: {
      name: 'first2find',
    },
    color: '#ecc411',
    slug: 'first2find',
    description: 'A WordPress website.',
    links: {
      external: 'https://first2find.nl/',
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
    name: 'Ruud Haverkort Autoschade',
    image: {
      name: 'ruud-haverkort-autoschade',
    },
    color: '#ea5c02',
    slug: 'ruud-haverkort-autoschade',
    description: 'A WordPress website.',
    links: {
      external: 'https://ruudhaverkortautoschade.nl/',
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
    name: 'Konforma',
    image: {
      name: 'konforma',
    },
    slug: 'konforma',
    description: 'A WordPress website.',
    links: {
      external: 'https://konforma.nl/',
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
    name: 'True Leadership',
    image: {
      name: 'true-leadership',
    },
    slug: 'true-leadership',
    description: 'A WordPress website.',
    links: {
      external: 'https://true-leadership.com/en/',
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
    name: 'Dierenpoli Sappemeer',
    image: {
      name: 'dierenpoli',
    },
    slug: 'dierenpoli',
    description: 'A WordPress website.',
    links: {
      external: 'https://dierenpoli.nl/',
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
    name: 'PPPO',
    image: {
      name: 'pppo',
    },
    slug: 'pppo',
    description: 'A WordPress website.',
    links: {
      external: 'https://pppo.org/',
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
    name: 'From the North',
    image: {
      name: 'from-the-north',
      extension: '.png',
    },
    color: '#000',
    slug: 'from-the-north',
    description: 'A WooCommerce webshop.',
    links: {
      external: 'https://fromthenorthbrewing.com/',
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
    name: 'Jil Potma',
    image: {
      name: 'jil-potma',
    },
    slug: 'jil-potma',
    description: 'A WordPress website.',
    links: {
      external: 'https://jilpotma.nl/',
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
    name: 'Naarsing Letselschade',
    image: {
      name: 'naarsing-letselschade',
    },
    color: '#1a1f2e',
    slug: 'naarsing-letselschade',
    description: 'A WordPress website.',
    links: {
      external: 'https://naarsingletselschade.nl/',
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
    name: 'Paais',
    image: {
      name: 'paais',
      extension: '.png',
    },
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
    name: 'Publiek',
    image: {
      name: 'publiek',
    },
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
    name: 'Mondriaanfondsen',
    image: {
      name: 'mondriaanfondsen',
    },
    color: '#94d4fd',
    slug: 'mondriaanfondsen',
    description: 'A WordPress website.',
    links: {
      external: 'https://mondriaanfondsen.nl/',
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
    image: {
      name: 'gewoon',
    },
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
  {
    name: 'Van Harte',
    image: {
      name: 'van-harte',
    },
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
    name: 'Gedrag',
    image: {
      name: 'gedrag',
    },
    color: '#ef703f',
    slug: 'gedrag',
    description: 'A WordPress website.',
    links: {
      external: 'https://gedrag.nl/',
    },
    technologies: [
      Technology.HTML,
      Technology.SCSS,
      Technology.BOOTSTRAP,
      Technology.JAVASCRIPT,
      Technology.PHP,
      Technology.WORDPRESS,
    ],
  },
  {
    name: 'Meerstaete',
    image: {
      name: 'meerstaete',
    },
    color: '#1d1a1d',
    slug: 'meerstaete',
    description: 'A WordPress website.',
    links: {
      external: 'https://vergaderlocatiemeerstaete.nl/',
    },
    technologies: [
      Technology.HTML,
      Technology.SCSS,
      Technology.BOOTSTRAP,
      Technology.JAVASCRIPT,
      Technology.PHP,
      Technology.WORDPRESS,
    ],
  },
];

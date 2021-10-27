import meta from '~/meta.json'

const common = {
  home: 'Home',
  blog: 'Blog',
  projects: 'Projects',
}

const components = {
  app: {
    AppBar: {
      home: common.home,
      projects: common.projects,
      blog: common.blog,
    },
    AppFooter: {
      copyright: `All rights reserved.`,
    },
  },
}

const pages = {
  index: {
    meta: {
      title: 'Home',
      description: meta.description,
    },
    content: {
      hero: {
        title:
          'Hey, I\'m <span class="text-indigo-500">Ronnie</span>. <br/> A <span class="text-indigo-500">Full-stack Developer</span>.',
        subtitle:
          "I'm currently based in the Netherlands, creating modern and functional web applications.",
        projects: 'My Projects',
        blog: 'My Blog',
      },
      stack: {
        title: 'My <span class="text-indigo-500">Stack</span>.',
        subtitle: 'Technologies that I understand and use.',
      },
    },
  },
  projects: {
    meta: {
      title: common.projects,
      description: "A collection of public GitHub repositories I've created.",
    },
    content: {
      title: 'My <span class="text-indigo-500">Projects</span>',
      subtitle: "A collection of public GitHub repositories I've created.",
      fetching: 'Fetching my projects...',
    },
  },
  blog: {
    meta: {
      title: common.blog,
      description: "A collection of articles I've written.",
    },
    content: {
      title: 'My <span class="text-indigo-500">Blog</span>.',
      subtitle: "A collection of articles I've written.",
    },
  },
}

export default {
  components,
  pages,
}

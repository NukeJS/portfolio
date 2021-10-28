const common = {
  home: 'Home',
  blog: 'Blog',
  projects: 'Projecten',
}

const components = {
  app: {
    AppBar: {
      home: common.home,
      projects: common.projects,
      blog: common.blog,
    },
    AppFooter: {
      copyright: `Alle rechten voorbehouden.`,
    },
  },
}

const pages = {
  index: {
    meta: {
      title: 'Home',
      description:
        'Full-stack Developer die moderne en functionele webapplicaties bouwt.',
    },
    content: {
      hero: {
        title:
          'Hey, ik ben <span class="text-indigo-500">Ronnie</span>. <br/> Een <span class="text-indigo-500">Full-stack ontwikkelaar</span>.',
        subtitle: 'Ik maak moderne en functionele webapplicaties.',
        projects: 'Mijn Projecten',
        blog: 'Mijn Blog',
      },
      stack: {
        title: 'Mijn <span class="text-indigo-500">Stack</span>.',
        subtitle: 'Technologieën die ik begrijp en gebruik.',
      },
    },
  },
  projects: {
    meta: {
      title: common.projects,
      description:
        'Een verzameling openbare GitHub-repositories die ik heb gemaakt.',
    },
    content: {
      title: 'Mijn <span class="text-indigo-500">Projecten</span>.',
      subtitle:
        'Een verzameling openbare GitHub-repositories die ik heb gemaakt.',
      fetching: 'Mijn projecten ophalen...',
    },
  },
  blog: {
    meta: {
      title: common.blog,
      description: 'Een verzameling artikelen die ik heb geschreven.',
    },
    content: {
      title: 'Mijn <span class="text-indigo-500">Blog</span>.',
      subtitle: 'Een verzameling artikelen die ik heb geschreven.',
    },
  },
}

export default {
  components,
  pages,
}

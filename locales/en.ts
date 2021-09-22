const common = {
  home: "Home",
  blog: "Blog",
  projects: "Projects",
  contact: "Contact"
};

const components = {
  AppBar: {
    home: common.home,
    blog: common.blog,
    projects: common.projects,
    contact: common.contact
  },
  AppNavigationDrawer: {
    home: common.home,
    blog: common.blog,
    projects: common.projects,
    contact: common.contact
  },
  AppFooter: {
    home: common.home,
    blog: common.blog,
    projects: common.projects,
    contact: common.contact,
    websiteLinks: "Website Links",
    socialLinks: "Social Links"
  }
};

const pages = {
  index: {
    hero: {
      title:
        "Hi, I'm <span class='text-indigo-600 dark:text-indigo-500'>Ronnie</span>. I'm a <span class='text-indigo-600 dark:text-indigo-500'>Full-stack Web Developer</span>.",
      description:
        "I'm a guy that is fond of creating full-stack web apps. I'm currently based in the Netherlands. I create modern and functional web apps.",
      buttons: {
        projects: "My Projects",
        blog: "My Blog"
      }
    },
    stack: {
      title:
        "My <span class='text-indigo-600 dark:text-indigo-500'>Stack</span>."
    }
  },
  projects: {
    index: {
      title:
        "My <span class='text-indigo-600 dark:text-indigo-500'>Projects</span>.",
      discoverMoreProjects:
        "Discover more projects on my <a class='text-indigo-600 dark:text-indigo-400' href='https://github.com/CodingWithNuke' target='_blank'>GitHub</a>."
    }
  },
  blog: {
    index: {
      title:
        "My <span class='text-indigo-600 dark:text-indigo-500'>Blog</span>.",
      searchbar: {
        placeholder: "Search through {count} articles"
      }
    }
  },
  contact: {
    index: {
      title:
        "<span class='text-indigo-600 dark:text-indigo-500'>Contact</span> Me.",
      description:
        "Don't like contact forms? E-mail me at <a class='text-indigo-600 dark:text-indigo-400' href='mailto:{email}'>{email}</a>.",
      form: {
        inputs: {
          firstName: {
            label: "First Name"
          },
          lastName: {
            label: "Last Name"
          },
          email: {
            label: "E-mail Address"
          },
          subject: {
            label: "Subject"
          },
          message: {
            label: "Message"
          }
        },
        submit: {
          label: "Send"
        }
      }
    }
  }
};

export default {
  components,
  pages
};

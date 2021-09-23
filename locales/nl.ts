const common = {
  home: "Home",
  blog: "Blog",
  projects: "Projecten",
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
    socialLinks: "Sociale Links"
  }
};

const pages = {
  index: {
    hero: {
      title:
        "Hallo, ik ben <span class='text-indigo-600 dark:text-indigo-500'>Ronnie</span>. Ik ben een <span class='text-indigo-600 dark:text-indigo-500'>Full-stack Webontwikkelaar</span>.",
      description:
        "Ik ben iemand die dol is op het maken van full-stack web-apps. Ik maak moderne en functionele web-apps.",
      buttons: {
        projects: "Mijn Projecten",
        blog: "Mijn Blog"
      }
    },
    stack: {
      title:
        "Mijn <span class='text-indigo-600 dark:text-indigo-500'>Stack</span>."
    }
  },
  projects: {
    index: {
      title:
        "Mijn <span class='text-indigo-600 dark:text-indigo-500'>Projecten</span>.",
      discoverMoreProjects:
        "Ontdek meer projecten op mijn <a class='text-indigo-600 dark:text-indigo-400' href='https://github.com/CodingWithNuke' target='_blank'>GitHub</a>."
    }
  },
  blog: {
    index: {
      title:
        "Mijn <span class='text-indigo-600 dark:text-indigo-500'>Blog</span>.",
      searchbar: {
        placeholder: "Zoek door {count} artikelen"
      }
    }
  },
  contact: {
    index: {
      title:
        "Neem <span class='text-indigo-600 dark:text-indigo-500'>Contact</span> Met Mij Op.",
      description:
        "Houd u niet van contactformulieren? E-mail mij op <a class='text-indigo-600 dark:text-indigo-400' href='mailto:{email}'>{email}</a>.",
      form: {
        inputs: {
          firstName: {
            label: "Voornaam"
          },
          lastName: {
            label: "Achternaam"
          },
          email: {
            label: "E-mailadres"
          },
          subject: {
            label: "Onderwerp"
          },
          message: {
            label: "Bericht"
          }
        },
        submit: {
          label: "Verstuur"
        }
      }
    }
  }
};

export default {
  components,
  pages
};

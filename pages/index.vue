<template>
  <rc-container>
    <rc-seo title="Home" />
    <IndexHeroSection />
    <IndexSkillsSection />
    <IndexContactSection />
  </rc-container>
</template>

<script>
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

import { mapMetaInfo } from "~/utils/helpers";

import IndexHeroSection from "~/components/pages/index/IndexHeroSection.vue";
import IndexSkillsSection from "~/components/pages/index/IndexSkillsSection.vue";
import IndexContactSection from "~/components/pages/index/IndexContactSection.vue";

export default defineComponent({
  head: {},

  components: {
    IndexHeroSection,
    IndexSkillsSection,
    IndexContactSection
  },

  setup() {
    useMeta(() => ({
      ...mapMetaInfo({
        title: "Home",
        description:
          "This is the personal website of Ronnie. This is the place where you can find my blog posts and read things about me.",
        path: "/"
      })
    }));
  }
});
</script>
<template>
  <rc-container>
    <IndexHeroSection />
    <IndexSkillsSection />
    <IndexContactSection />
  </rc-container>
</template>

<script>
import IndexHeroSection from "~/components/pages/index/IndexHeroSection.vue";
import IndexSkillsSection from "~/components/pages/index/IndexSkillsSection.vue";
import IndexContactSection from "~/components/pages/index/IndexContactSection.vue";

export default {
  head: {
    title: "Home"
  },

  components: {
    IndexHeroSection,
    IndexSkillsSection,
    IndexContactSection
  }
};
</script>
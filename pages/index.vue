<template>
  <rc-container>
    <IndexHeroSection />
    <IndexSkillsSection />
    <IndexContactSection />
  </rc-container>
</template>

<script>
import { mapMetaInfo } from "~/utils/helpers";

export default {
  head() {
    return mapMetaInfo({
      title: "Home",
      description:
        "I'm a guy that is fond of creating full stack web apps. I'm currently based in the Netherlands. I create modern and functional web apps.",
      path: "/"
    });
  }
};
</script>
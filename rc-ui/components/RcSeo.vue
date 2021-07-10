<template>
  <span v-if="false"></span>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    }
  },

  head() {
    const head = { title: this.title, meta: [] };

    if (this.title) {
      head.meta.push(
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.title
        }
      );
    }

    if (this.description) {
      head.meta.push(
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.description
        }
      );
    }

    if (this.image) {
      head.meta.push(
        {
          hid: "image",
          name: "image",
          content: this.image
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.image
        },
        {
          hid: "og:image:secure_url",
          name: "og:image:secure_url",
          content: this.image
        }
      );
    }

    if (this.title && this.image) {
      head.meta.push({
        hid: "og:image:alt",
        name: "og:image:alt",
        content: this.image
      });
    }

    return head;
  }
});
</script>

<style>
</style>
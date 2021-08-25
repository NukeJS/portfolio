<template>
  <rc-container class="my-6 md:my-8">
    <h2
      class="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:mt-2 md:mt-4 dark:text-white sm:text-4xl md:text-5xl"
    >
      <span class="text-indigo-600 dark:text-indigo-500">Contact</span> Me.
    </h2>

    <p
      class="max-w-2xl mt-4 text-lg font-medium text-gray-500 dark:text-gray-300 sm:mt-8"
    >
      Don't like contact forms? E-mail me at
      <a
        class="text-indigo-600 dark:text-indigo-400"
        :href="`mailto:${email}`"
        v-text="email"
      >
      </a
      >.
    </p>

    <form @submit.prevent="onSubmit" class="grid grid-cols-6 gap-6 mt-10">
      <rc-input
        v-model="form.firstName"
        label="First Name*"
        required
        class="col-span-6 sm:col-span-3"
      />
      <rc-input
        v-model="form.lastName"
        label="Last Name*"
        required
        class="col-span-6 sm:col-span-3"
      />
      <rc-input
        v-model="form.email"
        label="E-mail*"
        required
        type="email"
        class="col-span-6"
      />
      <rc-input
        v-model="form.subject"
        label="Subject*"
        required
        class="col-span-6"
      />
      <rc-textarea
        v-model="form.message"
        label="Message*"
        required
        class="col-span-6"
      />
      <div class="col-span-6 text-right">
        <rc-btn
          type="submit"
          class="px-4 py-2 ml-auto font-medium leading-6 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700"
        >
          Send Message
        </rc-btn>
      </div>
    </form>
  </rc-container>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMetaInfo } from "~/utils/helpers";

export default Vue.extend({
  head(): object {
    return mapMetaInfo({
      title: "Contact Me",
      description: "Want to get in touch with me? Contact me.",
      path: "/contact"
    });
  },

  data: () => ({
    email: "contact.ronniecodes@gmail.com",
    form: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  }),

  methods: {
    async onSubmit() {
      const { firstName, lastName, email, subject, message } = this.form;

      this.$axios.$post(
        "https://formsubmit.co/ajax/contact.ronniecodes@gmail.com",
        {
          name: `${firstName} ${lastName}`,
          email,
          _subject: subject,
          message
        }
      );
    }
  }
});
</script>
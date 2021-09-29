<template>
  <rc-container class="my-6 md:my-8">
    <h2
      class="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:mt-2 md:mt-4 dark:text-white sm:text-4xl md:text-5xl"
      v-html="$t('pages.contact.index.title')"
    />

    <p
      class="max-w-2xl mt-4 text-lg font-medium text-gray-500 dark:text-gray-300 sm:mt-8"
      v-html="$t('pages.contact.index.description', { email })"
    />

    <form @submit.prevent="onSubmit" class="grid grid-cols-6 gap-6 mt-10">
      <rc-input
        v-model="form.firstName"
        :label="$t('pages.contact.index.form.inputs.firstName.label')"
        required
        class="col-span-6 sm:col-span-3"
      />
      <rc-input
        v-model="form.lastName"
        :label="$t('pages.contact.index.form.inputs.lastName.label')"
        required
        class="col-span-6 sm:col-span-3"
      />
      <rc-input
        v-model="form.email"
        :label="$t('pages.contact.index.form.inputs.email.label')"
        required
        type="email"
        class="col-span-6"
      />
      <rc-input
        v-model="form.subject"
        :label="$t('pages.contact.index.form.inputs.subject.label')"
        required
        class="col-span-6"
      />
      <rc-textarea
        v-model="form.message"
        :label="$t('pages.contact.index.form.inputs.message.label')"
        required
        class="col-span-6"
      />
      <div class="col-span-6 text-right">
        <rc-btn
          type="submit"
          class="px-4 py-2 ml-auto font-medium leading-6 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700"
        >
          {{ $t("pages.contact.index.form.submit.label") }}
        </rc-btn>
      </div>
    </form>
  </rc-container>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMetaInfo } from "~/utils/helpers";

export default Vue.extend({
  nuxtI18n: {
    paths: {
      en: "/contact",
      nl: "/contact"
    }
  },

  head(): object {
    return mapMetaInfo({
      title: "Contact Me",
      description: "Want to get in touch with me? Contact me.",
      path: "/contact"
    });
  },

  data: () => ({
    email: "info@ronniecodes.com",
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

      this.$axios.$post("/v1/mail", {
        firstName,
        lastName,
        email,
        subject,
        message
      });
    }
  }
});
</script>
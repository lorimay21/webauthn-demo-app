<template>
  <v-ons-page>
    <v-ons-toolbar></v-ons-toolbar>

    <section>
      <div class="container">
        <div class="text-center m-5">
          <h1 class="font-weight-bold">{{ title }}</h1>
        </div>

        <div class="pt-4">
          <div class="mx-5 mb-2 text-center">
            <b-button variant="primary" class="w-50" @click="login"
              >Login</b-button
            >
          </div>
          <div class="mx-5 mb-2 text-center">
            <b-button variant="primary" class="w-50" @click="register"
              >Register</b-button
            >
          </div>
          <div class="mx-5 mb-2 text-center">
            <b-button variant="primary" class="w-50" @click="reissue"
              >Re-issue</b-button
            >
          </div>
        </div>
      </div>
    </section>
  </v-ons-page>
</template>
<script>
export default {
  name: "top-page",
  data: () => ({
    title: "WebAuthn Demo",
  }),
  methods: {
    /**
     * Redirect to Login page
     */
    login() {
      this.$router.push({ name: "login" });
    },

    /**
     * Redirect to Register page
     */
    register() {
      this.$router.push({ name: "register" });
    },

    /**
     * Redirect to Reissue page
     */
    reissue() {
      this.$ons.notification.alert("Temporarily unavailable.");
    },
  },
};
</script>

<template>
  <v-ons-page>
    <v-ons-toolbar></v-ons-toolbar>

    <section>
      <div class="container">
        <div class="text-center m-5">
          <h1 class="font-weight-bold">{{ title }}</h1>
        </div>
        <div class="p-4">
          <b-form @submit.stop.prevent>
            <div class="mb-3">
              <label for="feedback-email">
                Email Address <span class="text-danger">*</span>
              </label>
              <b-form-input
                v-model="inputData.emailAddress"
                id="feedback-email"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors.emailAddress }}
              </b-form-invalid-feedback>
            </div>
          </b-form>
          <div class="pt-4 text-center">
            <b-button
              :disabled="inputData.emailAddress == ''"
              variant="primary"
              class="w-50 my-1"
              @click="authenticate"
            >
              Login
            </b-button>
            <b-button variant="danger" class="w-50 my-1" @click="cancel">
              Cancel
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </v-ons-page>
</template>

<script>
import config from "@/config.js";
import formRequests from "@/plugins/FormRequests";
import * as defaults from "@/plugins/Defaults";
import { CredentialService } from "@/service/CredentialService";
import { generateChallenge } from "@/plugins/Helpers";

export default {
  name: "login-page",
  data: () => ({
    title: "Login",
    inputData: {
      emailAddress: "",
    },
    errors: {
      emailAddress: "",
    },
  }),
  methods: {
    /**
     * Authenticate a registered user
     */
    authenticate() {
      // Validate inputs
      let [hasError, errors] = formRequests.validateLoginForm(this.inputData);

      // Clear form
      this.clearForm();

      console.log(errors);

      // Render validation errors
      if (hasError) {
        return (this.errors = errors);
      }

      // Fetch login information using email address
      new CredentialService()
        .getRecord({ email_address: this.inputData.emailAddress })
        .then(async (credentials) => {
          if (credentials !== null) {
            const publicKey = {
              rp: {
                id: credentials.rp_id,
                name: credentials.rp_name,
              },
              pubKeyCredParams: defaults.pubKeyCredParams,
              attestation: defaults.attestation,
              timeout: 60 * 1000,
              challenge: generateChallenge(),
              allowCredentials: [
                {
                  id: credentials.raw_id,
                  type: defaults.credentialType,
                },
              ],
            };

            console.log("login");
            console.log({ publicKey });
            console.log(JSON.stringify({ publicKey }));

            try {
              const assertion = await navigator.credentials.get({ publicKey });

              console.log(assertion);
              console.log(JSON.stringify(assertion));

              console.log(`Assertion obtained`, assertion);
            } catch (error) {
              console.error(error.message);
            }
          } else {
            this.errors.emailAddress = "Authentication failed";
          }
        });
    },

    /**
     * Cancel registration process
     */
    cancel() {
      this.$router.push({ name: "top" });
    },

    /**
     * Clear form
     */
    clearForm() {
      this.errors = {
        emailAddress: "",
      };
    },
  },
};
</script>

<style scoped>
.invalid-feedback {
  display: block !important;
}
</style>
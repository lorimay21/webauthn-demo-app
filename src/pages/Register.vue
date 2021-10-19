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
              <label for="feedback-name">
                Name <span class="text-danger">*</span>
              </label>
              <b-form-input
                v-model="inputData.name"
                id="feedback-name"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors.name }}
              </b-form-invalid-feedback>
            </div>
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
              :disabled="inputData.name && inputData.emailAddress == false"
              variant="primary"
              class="w-50 my-1"
              @click="register"
            >
              Register
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
import { generateId, generateChallenge } from "@/plugins/Helpers";

export default {
  name: "register-page",
  components: {},
  data: () => ({
    title: "Registration",
    inputData: {
      name: "",
      emailAddress: "",
    },
    relyingParty: {
      name: config.app_name,
      id: config.domain,
    },
    attachment: "any",
    attestation: "none",
    assertion: null,
    errors: {
      name: "",
      emailAddress: "",
    },
  }),
  methods: {
    /**
     * Register new user
     */
    async register() {
      // Validate inputs
      let [hasError, errors] = formRequests.validateRegistrationForm(
        this.inputData
      );

      // Clear form
      this.clearForm();

      // Render validation errors
      if (hasError) {
        return (this.errors = errors);
      }

      try {
        // Initiliaze public key configurations
        const publicKey = {
          rp: this.relyingParty,
          pubKeyCredParams: defaults.pubKeyCredParams,
          timeout: 60 * 1000,
          attestation: this.attestation,
          authenticatorSelection:
            this.attachment === "any"
              ? undefined
              : {
                  ...defaults.authenticatorSelection,
                  authenticatorAttachment: this.attachment,
                },
          challenge: generateChallenge(),
          user: {
            id: generateId(),
            name: this.inputData.emailAddress,
            displayName: this.inputData.name,
          },
        };

        console.log({ publicKey });
        console.log(JSON.stringify({ publicKey }));

        // Create creedentials
        const cred = await navigator.credentials.create({ publicKey });
        console.log(cred.rawId);
        console.log(cred.rawId);
        console.log(cred.rawId);

        console.log("Register");
        console.log(cred);
        console.log(JSON.stringify(cred));


        // Register user in database
        new CredentialService()
          .insertRecords([
            {
              rp_id: this.relyingParty.id,
              rp_name: this.relyingParty.name,
              name: this.inputData.name,
              email_address: this.inputData.emailAddress,
              raw_id: cred.rawId,
            },
          ])
          .catch((error) => {
            console.error(error.message);
          })
          .finally(() => {
            // // Display toast notification
            // this.$ons.notification.toast("Successfully registered user", {
            //   timeout: 3000,
            //   animation: "fall",
            // });

            console.log("finalllyyyy");

            this.$router.push({ name: "top" });
          });
      } catch (error) {
        console.error(error.message);
      }
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
        name: "",
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
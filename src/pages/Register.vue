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

        <!-- <div class="output">
          <pre v-if="formattedUserDetails">
            <code>{{ formattedUserDetails }}</code>
          </pre>
          <pre v-if="formattedSavedCred">
            <span>// send this to server to verify and enroll the key</span>
            <code>{{ formattedSavedCred }}</code>
          </pre>
          <pre v-if="formattedAssertion">
            <span>// send this to server to verify a sign-in</span>
            <code>{{ formattedAssertion }}</code>
          </pre>
        </div> -->
      </div>
    </section>
  </v-ons-page>
</template>

<script>
import config from "@/config.js";
import formRequests from "@/plugins/FormRequests";
import * as defaults from "@/plugins/Defaults";
import {
  generateId,
  generateChallenge,
  ab2b64,
  encodeCredential,
  encodeAssertion,
} from "@/plugins/Helpers";

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
      name: "Webauthn Demo App",
      id: config.domain,
    },
    attachment: "any",
    attestation: "none",
    userDetails: null,
    savedCred: null,
    assertion: null,
    errors: {
      name: "",
      emailAddress: "",
    },
  }),
  computed: {
    // formattedUserDetails() {
    //   if (!this.userDetails) return null;
    //   return {
    //     ...this.userDetails,
    //     id: ab2b64(this.userDetails.id),
    //   };
    // },
    // formattedSavedCred() {
    //   if (!this.savedCred) return null;
    //   return encodeCredential(this.savedCred);
    // },
    // formattedAssertion() {
    //   if (!this.assertion) return null;
    //   return encodeAssertion(this.assertion);
    // },
  },
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

        // Register new user
        const cred = await navigator.credentials.create({ publicKey });

        // Set credentials
        this.savedCred = cred;
        this.userDetails = publicKey.user;

        console.log(`Credential obtained`, this.savedCred);
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
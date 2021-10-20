<template>
  <v-ons-splitter>
    <v-ons-splitter-content>
      <v-ons-navigator
        swipeable
        swipe-target-width="50px"
        :page-stack="pageStack"
        :options="navOptions"
      ></v-ons-navigator>

      <v-ons-page>
        <v-ons-toolbar></v-ons-toolbar>

        <section>
          <div class="container">
            <div class="text-center m-5">
              <h1 class="font-weight-bold">{{ title }}</h1>
            </div>

            <!-- Top page -->
            <div v-show="isTopPage">
              <div class="pt-4">
                <div class="mx-5 mb-2 text-center">
                  <b-button variant="primary" class="w-50" @click="loginPage"
                    >Login</b-button
                  >
                </div>
                <div class="mx-5 mb-2 text-center">
                  <b-button variant="primary" class="w-50" @click="registerPage"
                    >Register</b-button
                  >
                </div>
                <div class="mx-5 mb-2 text-center">
                  <b-button variant="primary" class="w-50" @click="reissuePage"
                    >Re-issue</b-button
                  >
                </div>
              </div>
            </div>

            <!-- Registration page -->
            <div v-show="isRegistrationPage">
              <div class="p-4">
                <b-form @submit.stop.prevent>
                  <div class="mb-3">
                    <label for="feedback-name">
                      Name <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      v-model="registerInputData.name"
                      id="feedback-name"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ registerFormErrors.name }}
                    </b-form-invalid-feedback>
                  </div>
                  <div class="mb-3">
                    <label for="feedback-email">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      v-model="registerInputData.emailAddress"
                      id="feedback-email"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ registerFormErrors.emailAddress }}
                    </b-form-invalid-feedback>
                  </div>
                </b-form>
                <div class="pt-4 text-center">
                  <div class="mx-5 mb-2 text-center">
                    <b-button
                      :disabled="
                        registerInputData.name &&
                        registerInputData.emailAddress == false
                      "
                      variant="primary"
                      class="w-50"
                      @click="register"
                    >
                      Register
                    </b-button>
                  </div>
                  <div class="mx-5 mb-2 text-center">
                    <b-button variant="danger" class="w-50" @click="cancel">
                      Cancel
                    </b-button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Login page -->
            <div v-show="isLoginPage">
              <div class="p-4">
                <b-form @submit.stop.prevent>
                  <div class="mb-3">
                    <label for="feedback-email">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      v-model="loginInputData.emailAddress"
                      id="feedback-email"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ loginFormErrors.emailAddress }}
                    </b-form-invalid-feedback>
                  </div>
                </b-form>
                <div class="pt-4 text-center">
                  <div class="mx-5 mb-2 text-center">
                    <b-button
                      :disabled="loginInputData.emailAddress == ''"
                      variant="primary"
                      class="w-50"
                      @click="authenticate"
                    >
                      Login
                    </b-button>
                  </div>
                  <div class="mx-5 mb-2 text-center">
                    <b-button variant="danger" class="w-50" @click="cancel">
                      Cancel
                    </b-button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Welcome page -->
            <div v-show="isWelcomePage">
              <div class="p-5">
                <div class="text-center sub-text">
                  You have successfully logged in to the application without
                  using a password!~
                </div>
                <div class="mt-5 text-center">
                  <div class="mx-5 mb-2 text-center">
                    <b-button variant="danger" class="w-50" @click="logout">
                      Logout
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </v-ons-page>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import config from "@/config.js";
import formRequests from "@/plugins/FormRequests";
import * as defaults from "@/plugins/Defaults";
import { initJsStore } from "@/service/idb_service";
import { CredentialService } from "@/service/CredentialService";
import { generateId, generateChallenge } from "@/plugins/Helpers";

export default {
  name: "webauthn-demo-app",
  async beforeCreate() {
    try {
      const isDbCreated = await initJsStore();

      if (isDbCreated) {
        console.log("Database has been created");
      } else {
        console.log("Database has been opened");
      }
    } catch (error) {
      // IndexDB not supported
      console.log(error);

      this.$ons.notification.alert({
        title: "",
        messageHTML: '<center><font size="2">Database Problem</font></center>',
        animation: "fade",
      });
    }
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
    navOptions() {
      return this.$store.state.navigator.options;
    },
  },
  components: {},
  data: () => ({
    title: "WebAuthn Demo",
    isTopPage: true,
    isRegistrationPage: false,
    isLoginPage: false,
    isWelcomePage: false,
    registerInputData: {
      name: "",
      emailAddress: "",
    },
    loginInputData: {
      emailAddress: "",
    },
    registerFormErrors: {
      name: "",
      emailAddress: "",
    },
    loginFormErrors: {
      emailAddress: "",
    },
    relyingParty: {
      name: config.app_name,
      id: config.domain,
    },
    attachment: "any",
    attestation: "none",
    assertion: null,
    credentials: null,
    userDetails: null,
  }),
  methods: {
    /**
     * Render Top page
     */
    topPage() {
      this.title = "WebAuthn Demo";
      this.isTopPage = true;
      this.isLoginPage = false;
      this.isRegistrationPage = false;
      this.isWelcomePage = false;
    },

    /**
     * Render Login page
     */
    loginPage() {
      this.title = "Login";
      this.isLoginPage = true;
      this.isTopPage = false;
      this.isRegistrationPage = false;
      this.isWelcomePage = false;
      this.clearLoginFormData();
      this.clearLoginFormErrors();
    },

    /**
     * Render Register page
     */
    registerPage() {
      this.title = "Registration";
      this.isRegistrationPage = true;
      this.isLoginPage = false;
      this.isTopPage = false;
      this.isWelcomePage = false;
      this.clearRegisterFormData();
      this.clearRegisterFormErrors();
    },

    /**
     * Render Welcome page
     */
    welcomePage() {
      this.title = `Welcome ${this.userDetails.name}`;
      this.isWelcomePage = true;
      this.isRegistrationPage = false;
      this.isLoginPage = false;
      this.isTopPage = false;
    },

    /**
     * Render Reissue page
     */
    reissuePage() {
      this.$ons.notification.alert("Temporarily unavailable.");
    },

    /**
     * Register new user
     */
    async register() {
      // Validate inputs
      let [hasError, errors] = formRequests.validateRegistrationForm(
        this.registerInputData
      );

      // Clear form
      this.clearRegisterFormErrors();

      // Render validation errors
      if (hasError) {
        return (this.registerFormErrors = errors);
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
            name: this.registerInputData.emailAddress,
            displayName: this.registerInputData.name,
          },
        };

        // Create credentials
        const credentials = await navigator.credentials.create({ publicKey });
        console.log(`Credentials obtained`, credentials);
        console.log(credentials);

        // Register user in database
        new CredentialService()
          .insertRecords([
            {
              rp_id: this.relyingParty.id,
              rp_name: this.relyingParty.name,
              name: this.registerInputData.name,
              email_address: this.registerInputData.emailAddress,
              // credential_id: credentials.id,
              credential_raw_id: credentials.rawId,
              // credential_type: credentials.type,
              credential_response: credentials.response,
            },
          ])
          .catch((error) => {
            console.error(error.message);
          })
          .finally(() => {
            // Display toast notification
            this.$ons.notification.toast("Successfully registered user", {
              timeout: 3000,
              animation: "fall",
            });

            // Render top page
            this.topPage();
          });
      } catch (error) {
        console.error(error.message);
      }
    },

    /**
     * Authenticate a registered user
     */
    async authenticate() {
      // Validate inputs
      let [hasError, errors] = formRequests.validateLoginForm(
        this.loginInputData
      );

      // Clear form
      this.clearLoginFormErrors();

      // Render validation errors
      if (hasError) {
        return (this.loginFormErrors = errors);
      }

      // Fetch login credentials
      await new CredentialService()
        .getRecord({ email_address: this.loginInputData.emailAddress })
        .then((credentials) => {
          console.log("first");
          console.log(credentials);

          this.credentials = credentials;
        });

      console.log("second");
      console.log(this.credentials);

      // Render authentication failed error
      if (this.credentials == null) {
        return (this.loginFormErrors.emailAddress = "Authentication failed");
      }

      const publicKey = {
        rp: this.relyingParty,
        pubKeyCredParams: defaults.pubKeyCredParams,
        attestation: defaults.attestation,
        timeout: 60 * 1000,
        challenge: generateChallenge(),
        allowCredentials: [
          {
            id: this.credentials.raw_id,
            type: defaults.credentialType,
          },
        ],
      };

      try {
        const assertion = await navigator.credentials.get({ publicKey });
        console.log(`Assertion obtained`, assertion);

        // Set user details
        this.userDetails = {
          id: this.credentials.id,
          name: this.credentials.name,
          email_address: this.credentials.email_address,
        };

        // Render welcome page
        this.welcomePage();
      } catch (error) {
        console.error(error.message);
      }
    },

    /**
     * Logout authenticated user
     */
    logout() {},

    /**
     * Cancel registration process
     */
    cancel() {
      // Render top page
      this.topPage();
    },

    /**
     * Clear registration form data
     */
    clearRegisterFormData() {
      this.registerInputData = {
        name: "",
        emailAddress: "",
      };
    },

    /**
     * Clear login form data
     */
    clearLoginFormData() {
      this.loginInputData = {
        emailAddress: "",
      };
    },

    /**
     * Clear registration form errors
     */
    clearRegisterFormErrors() {
      this.registerFormErrors = {
        name: "",
        emailAddress: "",
      };
    },

    /**
     * Clear login form errors
     */
    clearLoginFormErrors() {
      this.loginFormErrors = {
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

.sub-text {
  font-size: 18px;
  color: gray;
}
</style>
<template>
  <v-ons-page>
    <v-ons-toolbar></v-ons-toolbar>

    <section>
      <div class="container">
        <h1>Vue Webauthn demo</h1>
        <div>
          <div>
            <label>
              Username
              <input v-model="inputData.username" />
            </label>
          </div>
          <div>
            <label>
              Email
              <input v-model="inputData.emailAddress" />
            </label>
          </div>
          <div>
            <label>
              RP Name
              <input v-model="inputData.relyingParty.name" />
            </label>
          </div>
          <div>
            <label>
              RP ID
              <input disabled v-model="inputData.relyingParty.id" />
            </label>
          </div>
          <div>
            <label>
              Attestation
              <select v-model="inputData.attestation">
                <option value="none">
                  none (No data obtained from device)
                </option>
                <option value="indirect">indirect (Generic certificate)</option>
                <option value="direct">direct (All data)</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Attachment
              <select v-model="inputData.attachment">
                <option value="any">Any</option>
                <option value="platform">Platform (e.g. TouchID)</option>
                <option value="cross-platform">Cross-platform</option>
              </select>
            </label>
          </div>
          <hr />
          <button
            v-if="inputData.username && inputData.emailAddress"
            @click="register"
          >
            Register
          </button>
        </div>

        <div v-if="userDetails">
          <button @click="authenticate">Sign in</button>
        </div>

        <div class="output">
          <pre
            v-if="formattedUserDetails"
          ><code>{{ formattedUserDetails }}</code></pre>
          <pre v-if="formattedSavedCred"><!--
				--><span>// send this to server to verify and enroll the key</span>
<!--			--><code>{{ formattedSavedCred }}</code>
			</pre>
          <pre v-if="formattedAssertion"><!--
				--><span>// send this to server to verify a sign-in</span>
<!--			--><code>{{ formattedAssertion }}</code>
			</pre>
        </div>
      </div>
    </section>
  </v-ons-page>
</template>

<script>
import * as defaults from "@/plugins/Defaults";
import {
  generateId,
  generateChallenge,
  ab2b64,
  encodeCredential,
  encodeAssertion,
} from "@/plugins/Helpers";

console.log(defaults);

export default {
  name: "register-page",
  components: {},
  data: () => ({
    inputData: {
      username: "Luke Skywalker",
      emailAddress: "luke.skywalker@alderaan.net",
      relyingParty: {
        name: "Falcon Transportation Services",
        id: "lorimay21.github.io/webauthn-demo-app",
      },
      attachment: "any",
      attestation: "none",
    },
    userDetails: null,
    savedCred: null,
    assertion: null,
  }),
  computed: {
    formattedUserDetails() {
      if (!this.userDetails) return null;
      return {
        ...this.userDetails,
        id: ab2b64(this.userDetails.id),
      };
    },
    formattedSavedCred() {
      if (!this.savedCred) return null;
      return encodeCredential(this.savedCred);
    },
    formattedAssertion() {
      if (!this.assertion) return null;
      return encodeAssertion(this.assertion);
    },
  },
  methods: {
    async register() {
      const publicKey = {
        rp: this.inputData.relyingParty,
        pubKeyCredParams: defaults.pubKeyCredParams,
        timeout: 60 * 1000,

        attestation: this.inputData.attestation,

        // This would allow restricting devices to e.g. touchid or u2f key but it doesn't work consistently at the moment (2019-01-20)
        authenticatorSelection:
          this.inputData.attachment === "any"
            ? undefined
            : {
                ...defaults.authenticatorSelection,
                authenticatorAttachment: this.inputData.attachment,
              },

        // cryptographic challenge from server
        challenge: generateChallenge(),

        // user details from server post account creation
        user: {
          id: generateId(),
          name: this.inputData.emailAddress,
          displayName: this.inputData.username,
        },
      };

      console.log({ publicKey });

      // register / create a new credential
      try {
        const cred = await navigator.credentials.create({ publicKey });
        this.savedCred = cred;
        this.userDetails = publicKey.user;
        console.log(`Credential obtained`, this.savedCred);
      } catch (e) {
        console.error(e.message);
      }
    },
    async authenticate() {
      if (!this.savedCred) {
        alert("You must register first");
        return;
      }

      const publicKey = {
        rp: this.inputData.relyingParty,
        pubKeyCredParams: defaults.pubKeyCredParams,
        attestation: defaults.attestation,
        timeout: 60 * 1000,

        // cryptographic challenge from server
        challenge: generateChallenge(),

        allowCredentials: [
          {
            // user's credential id and settings from server
            id: this.savedCred.rawId,
            // transports: defaults.transports,
            type: defaults.credentialType,
          },
        ],
      };

      console.log({ publicKey });

      try {
        const assertion = await navigator.credentials.get({ publicKey });
        console.log(`Assertion obtained`, assertion);
        this.assertion = assertion;
      } catch (e) {
        console.error(e.message);
      }
    },
  },
};
</script>

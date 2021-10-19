/** Form requests JS file */

import Validations from "@/plugins/Validations.js";

// Declare error messages
const messages = {
    required: "Field is required",
    maxLength: "Must be maximum length of 255 characters only",
    invalidEmail: "Must be a valid email address",
};

export default {
    /**
     * Check if the form has error/s
     *
     * @param {Object} errors
     * @returns {Boolean}
     */
    checkIfHasError: function (errors) {
        let hasError = false;

        for (let key in errors) {
            if (errors[key] !== "") {
                hasError = true;
            }
        }

        return hasError;
    },

    /**
     * Validate user registration form
     *
     * @param {Object} data
     * @returns {Object}
     */
    validateRegistrationForm: function (data) {
        let hasError = false;
        let validationErrors = new Object({
            name: "",
            emailAddress: "",
        });

        // Validate required field
        validationErrors.name = Validations.required(data.name) ? messages.required : "";
        validationErrors.emailAddress = Validations.required(data.emailAddress) ? messages.required : "";

        // Validate input lengths
        validationErrors.name = Validations.maxLength(data.name, 255)
            ? messages.maxLength : "";
        validationErrors.emailAddress = Validations.maxLength(data.emailAddress, 255)
            ? messages.maxLength : "";

        // Validate email address validity
        validationErrors.emailAddress = Validations.email(data.emailAddress) ? messages.invalidEmail : "";

        // Check if there is error
        hasError = this.checkIfHasError(validationErrors);

        return [hasError, validationErrors];
    },
}

/** Validations JS file */

export default {
    /**
     * Validate required field.
     *
     * @param {String|Number} data - Input data.
     * @returns {Boolean}
     */
    required: function (data) {
        return (data == null || data == "");
    },

    /**
     * Validate input type field.
     *
     * @param {String|Number} data - Input data.
     * @param {String} type - Input types. Can be "string" or "number". Defaults to "string".
     * @param {Boolean} notNullable - If field is nullable. Defaults to true.
     * @returns {Boolean}
     */
    inputType: function (data, type = "string", notNullable = true) {
        if (!notNullable && this.required(data)) {
            return false;
        }

        return (typeof data !== type);
    },

    /**
     * Validate input minimum length.
     *
     * @param {String|Number} data - Input data.
     * @param {String} minLength - Minimum length. Defaults to 4.
     * @param {Boolean} notNullable - If field is nullable. Defaults to true.
     * @returns {Boolean}
     */
    minLength: function (data, minLength = 4, notNullable = true) {
        if (!notNullable && this.required(data)) {
            return false;
        }

        return data.length <= minLength;
    },

    /**
     * Validate input maximum length.
     *
     * @param {String|Number} data - Input data.
     * @param {String} maxLength - Maximum length. Defaults to 255.
     * @param {Boolean} notNullable - If field is nullable. Defaults to true.
     * @returns {Boolean}
     */
    maxLength: function (data, maxLength = 255, notNullable = true) {
        if (!notNullable && this.required(data)) {
            return false;
        }

        return data.length > maxLength;
    },

    /**
     * Validate email address.
     *
     * @param {String|Number} data - Input data.
     * @param {Boolean} notNullable - If field is nullable. Defaults to true.
     * @returns {Boolean}
     */
    email: function (data, notNullable = true) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!notNullable && this.required(data)) {
            return false;
        }

        return !regex.test(String(data).toLowerCase());
    }
}

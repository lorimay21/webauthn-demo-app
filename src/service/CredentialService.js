import { connection } from "./jsstore_con";

export class CredentialService {

    constructor() {
        this.tableName = "credentials";
    }

    /**
     * Get a single record per conditions.
     *
     * @param  {Object} conditions Search conditions
     * @return {Promise}
     */
    async getRecord(conditions) {
        let data = await connection.select({
            from: this.tableName,
            where: conditions,
            limit: 1
        });

        return data[0] || null;
    }

    /**
     * Get multiple record per conditions.
     *
     * @param  {Object} conditions Search conditions
     * @return {Promise}
     */
    async getRecords(conditions) {
        return await connection.select({
            from: this.tableName,
            where: conditions,
        });
    }

    /**
     * Insert new credentials into IndexedDB.
     *
     * @param {Array} data credential array of objects to be inserted.
     * @return {Promise}
     */
    async insertRecords(data) {
        return await connection.insert({
            into: this.tableName,
            values: data,
            upsert: true,
            return: true,
        })
    }

    /**
     * Delete records.
     *
     * @param {Array} ids ids to be deleted
     * @return {Number} count of deleted rows
     */
    async deleteRecords(ids) {
        const rowsDeleted = await connection.remove({
            from: this.tableName,
            where: {
                id: {
                    in: ids
                }
            }
        });

        console.log(`Deleted ${rowsDeleted} records`);

        return rowsDeleted;
    }
}
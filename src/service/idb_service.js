import { connection } from "./jsstore_con";
import { DATA_TYPE } from "jsstore";

const getDatabase = () => {
    /**
     * Credentials table
     */
    const tblCredentials = {
        name: 'credentials',
        columns: {
            id: {
                primaryKey: true,
                dataType: DATA_TYPE.Number,
                autoIncrement: true,
            },
            rp_id: {
                dataType: DATA_TYPE.String,
            },
            rp_name: {
                dataType: DATA_TYPE.String,
            },
            email_address: {
                dataType: DATA_TYPE.String,
            },
            raw_id: {
                dataType: DATA_TYPE.Array,
            },
            created: {
                dataType: DATA_TYPE.DateTime,
                default: new Date(),
            },
            modified: {
                dataType: DATA_TYPE.DateTime,
                default: new Date(),
            },
            deleted: {
                dataType: DATA_TYPE.DateTime,
                notNull: false,
            }
        }
    };

    const database = {
        name: "web_authn",
        tables: [
            tblCredentials,
        ]
    };

    return database;
};

export const initJsStore = async () => {
    const database = getDatabase();
    return await connection.initDb(database);
};
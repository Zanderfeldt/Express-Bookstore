/** Database config for database. */


const { Client } = require("pg");
const {DB_NAME} = require("./config");

let db = new Client({
  host: '/var/run/postgresql/',
  database: DB_NAME
});

db.connect();


module.exports = db;


// db.ts
const {Client, Pool} = require("pg");
const config = require("../config.js");

// Our connection to the database
const pool = new Pool(config["rdsConfig"]);

export default pool;
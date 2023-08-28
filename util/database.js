const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "vfx$4Ip45",
});

module.exports = pool.promise();

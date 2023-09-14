const mySQl = require("mysql2");

const db = mySQl.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});

module.exports = db;

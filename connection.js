const mySQl = require("mysql2");

const db = mySQl.createConnection({
  host: "localhost",
  user: "root",
  password: "GaguKega5663!",
  database: "employee_db",
});

db.connect((err) => {
  if (err) throw err;
})

module.exports = db;

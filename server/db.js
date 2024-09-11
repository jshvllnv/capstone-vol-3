const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Reavan06#",
  port: 5432,
  host: "localhost",
  database: "capsvol3",
});

module.exports = pool;

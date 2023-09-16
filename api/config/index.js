require('dotenv').config()
const { createPool } = require('mysql2')

const pool = createPool({
  host: process.env.dbHost,
  database: process.env.dbName,
  user: process.env.dbUser,
  password: process.env.dbPwd,
  multipleStatements: true,
  connectionLimit: 30,
}).promise()

module.exports = pool

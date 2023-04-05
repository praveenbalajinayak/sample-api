const Pool = require('pg').Pool
const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'newPassword',
  port: 5433,
})


module.exports = {client}
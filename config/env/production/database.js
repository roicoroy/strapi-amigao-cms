const parse = require('pg-connection-string').parse;
const config = parse(process.env.HEROKU_DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
        ssl: false
      },
    },
    pool: {
      max: 6,
      min: 2,
      idleTimeoutMillis: 30000,
      createTimeoutMillis: 30000,
      acquireTimeoutMillis: 30000,
      propagateCreateError: false
    },
    debug: true,
  },
});
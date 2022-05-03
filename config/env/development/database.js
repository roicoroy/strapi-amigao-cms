module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'ricardobento'),
      password: env('DATABASE_PASSWORD', '0000'),
      schema: 'public',
      rejectUnauthorized: false,
      ssl: false
    },
    debug: true,
  },
});
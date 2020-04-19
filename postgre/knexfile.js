// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE_DEV,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    }, migrations: {
      directory: './migrations'
    }, useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE_STA,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    }, migrations: {
      directory: './migrations'
    }, useNullAsDefault: true,
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE_PROD,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    }, migrations: {
      directory: './migrations'
    }, useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

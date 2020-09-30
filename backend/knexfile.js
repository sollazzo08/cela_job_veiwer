require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: process.env.MYSQL_DATABASE,
      user: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};

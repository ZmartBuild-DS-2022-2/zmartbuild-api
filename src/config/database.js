require('dotenv').config()

const config = {
  development: {
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
    host: process.env.DATABASE_HOST || '',
    port: process.env.DATABASE_PORT || '',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  test: {
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
    host: process.env.DATABASE_HOST || '',
    port: process.env.DATABASE_PORT || '',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  }
}

module.exports = config[process.env.NODE_ENV]

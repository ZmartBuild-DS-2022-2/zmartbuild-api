/* eslint-disable no-console */

import pg from 'pg'
import { Sequelize } from 'sequelize'
import { loadTicket } from '../models/ticket'
import { loadComment } from '../models/comment'

const config = {
  username: process.env.DATABASE_USERNAME || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  host: process.env.DATABASE_HOST || '',
  port: process.env.DATABASE_PORT || '',
  dialect: 'postgres'
}

const DATABASE_LOG = !process.env.DATABASE_LOG ? false : (process.env.DATABASE_LOG === 'true')

Sequelize.DATE.prototype._stringify = function _stringify (date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS')
}

const commonOptions = {
  ...config,
  logging: DATABASE_LOG ? msg => console.log(msg) : false,
  define: {
    underscored: true,
    freezeTableName: true
  },
  timezone: '+00:00',
  dialectModule: pg
}

export const loadORM = async () => {
  try {
    const instanceSequelize = new Sequelize(commonOptions)
    await instanceSequelize.authenticate()
    const orm = {}
    orm.Ticket = loadTicket(instanceSequelize, Sequelize.DataTypes)
    orm.Comment = loadComment(instanceSequelize, Sequelize.DataTypes)
    orm.Ticket.associate(orm)
    orm.Comment.associate(orm)

    console.log('Database Connected OK')
    return orm
  } catch (e) {
    console.log('Error config database', e)
  }
}

import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

export const getUsers = async (event, context, callback) => {
  try {
    const orm = await loadORM()
    const users = await orm.User.findAll()
    return succesfullResponse(users, event)
  } catch (error) {
    return errorResponse(error, 400)
  }
}

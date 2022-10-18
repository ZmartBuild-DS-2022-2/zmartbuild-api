import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

export const getUser = async (event, context, callback) => {
  try {
    const orm = await loadORM()
    const user = await orm.User.findByPk(event.pathParameters.id)
    return succesfullResponse(user)
  } catch (error) {
    return errorResponse(error, 400)
  }
}

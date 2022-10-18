import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

const sanitizeBody = (body) => {
    return {
      email: body.email,
    }
  }

export const createUser = async (event) => {

  const body = sanitizeBody(JSON.parse(event.body))
  const orm = await loadORM()

  try {
    const user = orm.User.build({ ...body })
    await user.save()
    return succesfullResponse(user, 201)
  } catch (error) {
    return errorResponse(error, 400)
  }
}


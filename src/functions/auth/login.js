require('dotenv').config()

import jsonwebtoken from 'jsonwebtoken'

import { succesfullResponse, errorResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

export const login = async (event, context, callback) => {
  const { email, password } = JSON.parse(event.body)
  const orm = await loadORM()
  const user = await orm.User.findOne({ where: { email } })
  // TODO: encrypt password with bcryptjs
  if (user && password === user.password) {
    const content = { id: user.id, email: user.email }
    const token = jsonwebtoken.sign(content, process.env.JWT_SECRET, { expiresIn: '3d' })
    const cookies = {
      'Set-Cookie': `access_token=${token};Path=/; HttpOnly`,
    }
    return succesfullResponse(user, event, 200, cookies)
  }
  return errorResponse('Bad credentials', 404)

  // try {
  //     return succesfullResponse(user, 200, cookies)
  //   }
  // } catch (error) {
  //   return errorResponse(error, 400)
  // }
}

import { succesfullResponse } from '../../utils/response_util'

export const logout = async (event, context, callback) => {
  return succesfullResponse(null, event)
}

import User from '../../../models/user'
import { AuthenticationError } from 'apollo-server-express'

const user = async (_, args) => {
  const user = await User.findOne({
    email: args.email
  })

  if (!user) {
    throw new AuthenticationError('User not found')
  }
  return user
}

module.exports = user

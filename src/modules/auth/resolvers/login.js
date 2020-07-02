import { AuthenticationError } from 'apollo-server-express'
import tokenUtil from '../../../utils/token'
import bcrypt from 'bcrypt'
import User from '../../../models/user'
import config from '../../../../config'

const login = async (_, args) => {
  const { password, email } = args.loginInput
  const user = await User.findOne({
    email: email
  })

  if (Array.isArray(user)) {
    throw new AuthenticationError('User not found')
  }
  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword)
  if (!isPasswordValid) {
    throw new AuthenticationError('Incorrect password')
  }
  const token = tokenUtil.create(user.id)
  return {
    user: {
      ...user._doc,
      id: user._id
    },
    token,
    tokenExpiration: config.JWT_LIFE_TIME
  }
}

module.exports = login

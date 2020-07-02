import { UserInputError } from 'apollo-server-express'
import User from '../../../models/user'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 10

const signup = async (root, args, context, info) => {
  const { email, password, firstName, lastName } = args.signupInput

  // Valid if user exist
  const { ...user } = await User.findOne({
    email: email
  })

  if (Array.isArray(user)) {
    throw new UserInputError('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  const newUser = await User.create({
    email,
    hashedPassword,
    firstName,
    lastName
  })
  return newUser
}

module.exports = signup

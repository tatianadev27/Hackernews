import user from './user'
import login from './login'
import signup from './signup'

const resolvers = {
  Query: {
    user
  },
  Mutation: {
    login,
    signup
  },
  User: {
    /* books: ({ id }) => {
            return Book.find({ user: id })
        } */
  }
}

module.exports = resolvers

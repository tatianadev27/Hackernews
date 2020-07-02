import links from './links'
import createLink from './createLink'
const resolvers = {
  Query: {
    links
  },
  Mutation: {
    createLink
  }
}
module.exports = resolvers

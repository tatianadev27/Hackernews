import isAuthenticated from './is-authenticated'
module.exports = {
  typeDefs: [
    isAuthenticated.typeDef
  ],
  schemaDirectives: {
    isAuthenticated: isAuthenticated.directive
  }
}

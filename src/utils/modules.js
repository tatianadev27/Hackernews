import { gql, makeExecutableSchema } from 'apollo-server-express'
import deepmerge from 'deepmerge'
import scalars from '../scalars'
import directives from '../directives'

const globalTypeDefs = gql`
  type Query
  type Mutation
`
const makeExecutableSchemaFromModules = ({
  modules
}) => {
  let typeDefs = [
    globalTypeDefs,
    ...scalars.typeDefs,
    ...directives.typeDefs
  ]
  let resolvers = {
    ...scalars.resolvers
  }
  modules.forEach(module => {
    typeDefs = [
      ...typeDefs,
      ...module.typeDefs
    ]
    resolvers = deepmerge(resolvers, module.resolvers)
  })
  return makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    schemaDirectives: {
      ...directives.schemaDirectives
    }
  })
}
module.exports = {
  makeExecutableSchemaFromModules
}

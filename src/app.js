import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './modules'
import context from './utils/context'

const server = new ApolloServer({
  schema: schema,
  context: async ({ req }) => ({
    user: await context.getUser(req)
  })
})
const app = express()
server.applyMiddleware({
  path: '/graphql',
  app
})

module.exports = app

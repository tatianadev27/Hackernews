import resolvers from './resolvers'

const typeDefs = `
  extend type Query {
    links: [Link]
  }
  
  extend type Mutation {
    createLink(linkInput: createLinkInput): Link
  }

  input createLinkInput {
    description: String
    url: String
  }

  type Link implements Node {
    id: ID!
    created: DateTime!
    changed: DateTime!
    description: String!
    url: String!
  }
`
module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [
    typeDefs
  ],
  resolvers
}

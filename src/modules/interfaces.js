// The schema (feel free to split these in a subfolder if you'd like)
const typeDefs = `
interface Node {
    id: ID!
    created: DateTime!
    changed: DateTime!
  }
`
const resolvers = {}
module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [
    typeDefs
  ],
  resolvers
}

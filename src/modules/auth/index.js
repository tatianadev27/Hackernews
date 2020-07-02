import resolvers from './resolvers'

const typeDefs = `
    extend type Query {
        user(email: String!): User @isAuthenticated
    }
  
    extend type Mutation {
        login(loginInput: loginInput): AuthData
        signup(signupInput: signupInput): User
    }

    input loginInput{
        email: String!,
        password: String!
    }

    input signupInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type AuthData {
        user: User
        token: String!
        tokenExpiration: String!
    }

    type User implements Node {
        id: ID!,
        firstName: String!
        lastName: String!
        email: String!
        created: DateTime!
        changed: DateTime!
        role: Role!
    }

    enum Role {
        ADMIN
        CUSTOMER
    }
`
module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [
    typeDefs
  ],
  resolvers
}

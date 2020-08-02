import { gql } from 'apollo-server-express'

export default gql`

  # extend type Mutation {}
  # extend type Subscription{}
  
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  type User {
    id: ID!
    email: String!
  }
`
import { gql } from 'apollo-server-express'

const typeDefs = gql`
  # extend type Mutation {}
  # extend type Subscription{}
  
  type Query {
    # User
    user(id: ID!): User
    users: [User!]!
    # Movie
    movie(id: ID!): Movie
    movies: [Movie!]!
  }

  type User {
    id: ID!
    email: String!
  }

  type Movie {
    id: ID!
    title: String!
    year: String!
    # year: Date!
  }
`

module.exports = typeDefs
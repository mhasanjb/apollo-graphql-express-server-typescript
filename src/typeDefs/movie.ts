import { gql } from 'apollo-server-express'

export default gql`

  # extend type Mutation {}
  # extend type Subscription{}
  
  extend type Query {
    movie(id: ID!): Movie
    movies: [Movie!]!
  }

  type Movie {
    id: ID!
    title: String!
    year: String!
    # year: Date!
  }
`
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
// import typeDefs from './typeDefs'
const typeDefs = require('./schema')
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res })
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 3000 }, () =>
  console.log(`Server: http://localhost:3000${server.graphqlPath}`)
)

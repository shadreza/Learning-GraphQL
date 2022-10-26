const  { ApolloServer, gql } = require("apollo-server");

// Scalar Types
// String, Int, Boolean, Float, ID!

const typeDefs = gql`
    type Query {
        name: String!
        age : Int!
        salary : Float!
        married : Boolean!
        visitedPlaces : [String!]!
    }
`

const resolvers = {
    Query: {
        name: () => "Tubamoni",
        age: () => 24,
        salary: () => 491913.102,
        married: () => true,
        visitedPlaces : () => ["Darjeeling", "Agra", "Cox's Bazar", "Bogra"]
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log("Server is ready at "+ url )
})
const { ApolloServer } = require("apollo-server");
const { products, categories_array, reviews } = require("./db");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema") 

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category,
        Mutation
    },
    context: {
        products,
        categories_array,
        reviews
    }
})

server.listen().then(({ url }) => {
    console.log("Server is ready at "+ url )
})
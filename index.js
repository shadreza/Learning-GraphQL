const { ApolloServer } = require("apollo-server");
const { products, categories_array } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema") 

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category,
    },
    context: {
        products,
        categories_array
    }
})

server.listen().then(({ url }) => {
    console.log("Server is ready at "+ url )
})
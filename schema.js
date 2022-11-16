const { gql } = require("apollo-server");

// Scalar Types
// String, Int, Boolean, Float, ID!
exports.typeDefs = gql`
    type Query {
        name: String!
        age: Int!
        salary: Float!
        married: Boolean!
        visitedPlaces: [String!]!
        boughtProducts: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    # object type
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
`
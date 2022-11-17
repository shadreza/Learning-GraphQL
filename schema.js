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
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        allReviews: [Review!]!
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
        allReviews: [Review!]!
        bestReviews(benchMark: Int!, maxCount: Int!): [Review!]!
        worstReview: Review!
    }

    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        # date is not a data type in GraphQL
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Float
    }

    input AddCategoryInput {
        name: String!
    }

    type Mutation {
        addCategory(input: AddCategoryInput): Category!
    }


`
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
        productId: ID
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Float
    }

    input AddCategoryInput {
        name: String!
    }

    input AddProductInput {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        categoryId: ID!
    }

    input AddReviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }

    type Mutation {
        addCategory(input: AddCategoryInput): Category!
        addProduct(input: AddProductInput): Product!
        addReview(input: AddReviewInput): Review!
        deleteCategory(id: ID!): String! 
        deleteProduct(id: ID!): String! 
        deleteReview(id: ID!): String! 
    }


`
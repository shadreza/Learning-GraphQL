# GraphQL

**Apollo-Studio Live Link: https://studio.apollographql.com/graph/shadreza-learns-graphql/**

## Advantages

Helps to reduce over-fetching and under-fetching
Very good for bringing out stuff only that we need

## Steps

    npm init -y

<br/>
    
    npm install apollo-server graphql

    npm install uuid

<br/>

by using the apollo-server we will be working on the graphql part
here we had to bring in the **typeDefs** & **resolvers** for the configuration of the apollo-server

then in the localhost we can see the apollo server running live and we will be making the simple **Scalar Typed [String, Int, Boolean, Float, ID!]** data acquisitions

## Code Structuring

The entire file structuring needs to be cleaned and organized

    /root
        queries
            mutations
                add
                    MutationAddCategory
                    MutationAddProduct
                    MutationAddReview
                delete
                    MutationDeleteCategory
                    MutationDeleteProduct
                    MutationDeleteReview
                updatee
                    MutationUpdateCategory
                    MutationUpdateProduct
                    MutationUpdateReview
            simple-query
                getAllData
                FilteringProducts
                MergingObjects
        resolvers
            Category.js
            Product.js
            Query.js
            Mutation.js
        db.js
        index.js
        schema.js
        pkg.json + others

<br/>

### Index.js

Here the **Index.js** is the server point or the **gateway** that will be going through all the **connections back-and-forth between the local server and the apollo-server**

<br/>

### db.js

Here the **db.js** is the **local database** that is providing with all the data and the other stuff like the collections and other info

<br/>

### schema.js

Here the **schema.js** is the file that holds all the type-Definitions of all the collections that we can query on. Here in a specific type we are to set what are the things that can be queried upon and what will be the return type and also things like nullable or non-nullable. And the parameters that we pass here can be taken from the **args** param from the **resolvers**. Here the **type** keyword is for the typeDefs, **input** is for the **grouping of sets of arguments together and can be used in another field**

<br/>

### Queries

Here the **queries** folder we have kept the query operations which are giving the results in the apollo-server. Here when we are making an operation call in the apollo-server then we are to use these commands and this is very straightforward because in the **{ }** we are calling the internal params of that type and from that we can get the results. Like objects but don't have **comma (,)**

<br/>

### Resolvers

Here the **Resolvers** folder we are having the resolvers javaScript files and within those we are **setting the logic on how we can serve the results that the queries call upon**. And the queries that we have pronounced in the query files need to be exact and the return types need to be matched also

##### Simple-Query

Here we have kept the simple resolvers that only work on the **get** stuff. The **R [Read]** functionality is implemented here

##### Mutations

Here we have kept the mutation logics that is the other pillars of the **CRUD** concept. Here the 3 things are done as **C [Create / Add], U [Update], D[Delete].** This is why this is called mutation cause it changes the stuff...

---

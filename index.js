const  { ApolloServer, gql } = require("apollo-server");

// Scalar Types
// String, Int, Boolean, Float, ID!

const typeDefs = gql`
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
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
`

const products = [
    {
        id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
        name: "Steel Pot",
        description: "Silver steel pot that is perfect for cooking",
        quantity: 230,
        price: 42.44,
        image: "img-1",
        onSale: false,
        categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
        name: "Salad Bowl",
        description: "Round wooden bowl perfect for tossing and making salads",
        quantity: 33,
        price: 53.5,
        image: "img-2",
        onSale: false,
        categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
    },
    {
        id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
        name: "Spoon",
        description: "Small and delicate spoon",
        quantity: 4266,
        price: 1.33,
        image: "img-3",
        onSale: true,
        categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
    },
    {
        id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
        name: "Shovel",
        description: "Grey rounded shovel for digging",
        quantity: 753,
        price: 332,
        image: "img-4",
        onSale: false,
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
    },
    {
        id: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
        name: "Fertilizer",
        description: "Nitrogen based fertitlizer",
        quantity: 53453,
        price: 23.11,
        image: "img-5",
        onSale: true,
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
    },
    {
        id: "f01bcdec-6783-464e-8f9e-8416830f7569",
        name: "Basketball",
        description: "Outdoor or indoor basketball",
        quantity: 128,
        price: 59.99,
        image: "img-6",
        onSale: true,
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    },
    {
        id: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
        name: "Golf Clubs",
        description: "Good for golfing",
        quantity: 3,
        price: 427.44,
        image: "img-7",
        onSale: false,
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    },
    {
        id: "b553085a-a7e0-4c9b-8a12-f971919c3683",
        name: "Baseball Gloves",
        description: "Professional catcher gloves",
        quantity: 745,
        price: 77.0,
        image: "img-8",
        onSale: true,
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    },
    {
        id: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
        name: "Soccer Ball",
        description: "Round ball",
        quantity: 734,
        price: 93.44,
        image: "img-9",
        onSale: false,
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    },
    {
        id: "jasd98h9as103e",
        name: "iPad Pro",
        description: "This is a great product for Graphics Designer",
        quantity: 10,
        price: 799.99,
        image: "img-9",
        onSale: true,
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    }
];

const categories_array = [
  {
    id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    name: "Kitchen",
  },
  {
    id: "34115aac-0ff5-4859-8f43-10e8db23602b",
    name: "Garden",
  },
  {
    id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    name: "Sports",
  },
];


// resolver has 3 parameters that we can utilize 
// parent - args - context
const resolvers = {
    Query: {
        name: (parent, args, context) => "Tubamoni",
        age: (parent, args, context) => 23,
        salary: (parent, args, context) => 491913.102,
        married: (parent, args, context) => true,
        visitedPlaces: (parent, args, context) => ["Darjeeling", "Agra", "Cox's Bazar", "Bogra"],
        boughtProducts: (parent, args, context) => {
            return products
        },

        product: (parent, args, context) => {
            // console.log(parent)
            // console.log(args.id)
            // console.log(context)

            for (let i = 0; i < products.length; i++) {
                if (products[i].id === args.id) {
                    return products[i]
                }
            }

            return null

        },

        categories: (parent, args, context) => categories_array,

        category: (parent, args, context) => {
            for (let i = 0; i < categories_array.length; i++) {
                const {id} = args
                return categories_array.find((c) => c.id === id)

                // if (categories_array[i].id === args.id) {
                //     return categories_array[i]
                // }
            }
        },

    },

    Category: {
        products: (parent, args, context) => {
            // console.log(parent)
            const {id} = parent
            return products.filter(product => product.categoryId === id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log("Server is ready at "+ url )
})
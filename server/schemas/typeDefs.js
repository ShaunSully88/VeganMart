const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    createdAt: String
    orders: [Order]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    image: String
    quantity: Int
    category: [Category]
  }

  type Category {
    _id: ID
    name: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    products(category: String): [Product]
    product(_id: ID!): Product
    categories: [Category]
    order(_id: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
  }
`;

module.exports = typeDefs;

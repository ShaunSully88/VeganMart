const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Order {
    _id: ID
    purchaseDate: String
  }

  type Query {
    categories: [Category]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addOrder(products: [ID]!): Order
  }

  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;

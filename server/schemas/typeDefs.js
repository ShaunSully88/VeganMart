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
  }

  type Mutation {
    addOrder(products: [ID]!): Order
  }
`;

module.exports = typeDefs;

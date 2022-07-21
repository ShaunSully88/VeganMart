const { AuthenticationError } = require('apollo-server-express');
const { Category, Order } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
  },
};

module.exports = resolvers;

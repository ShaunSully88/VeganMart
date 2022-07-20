const { AuthenticationError } = require('apollo-server-express');
const { Category } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
  },
};

module.exports = resolvers;

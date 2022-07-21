const { Category, Order, User, Product } = require("../models/index");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      return User.find({}).populate("orders").select("-password");
    },

    user: async (parent, { _id }, context, info) => {
      return User.findById(_id).populate("orders").select("-password");
    },

    me: async (parent, args, context, info) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("thoughts")
          .populate("friends");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //optionally gets all products by category
    products: async (parent, { category }, context, info) => {
      //NOTE: if there is only one product in the category this query will break because the typedef expects an array of products
      if (category) {
        const products = await Product.find({}).populate("category");

        return products.filter((item) => {
          return item.category[0].name === category;
        });
      }

      return Product.find({}).populate("category");
    },

    product: async (parent, { _id }, context, info) => {
      return Product.findById(_id).populate("category");
    },
  },

  Mutation: {
    addUser: async (parent, args, context, info) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }, context, info) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
module.exports = resolvers;

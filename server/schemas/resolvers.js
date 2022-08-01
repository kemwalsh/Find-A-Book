const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const foundUser = await User.findOne({
        username: args.username,
      });
      return foundUser;
    },
  },
  //   Mutation: {},
};
module.exports = resolvers;

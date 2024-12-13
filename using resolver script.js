const resolvers = {
  Query: {
    getOrders: async (_, { status }, { dataSources }) => {
      return dataSources.ordersAPI.getOrdersByStatus(status);
    },
  },
};

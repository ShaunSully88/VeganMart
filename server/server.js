const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas/index");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express(express.urlencoded({ extended: true }));
app.use(express.json());

async function startApolloServer(typeDefs, resolvers) {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is live on port ${PORT}`);
      console.log(
        `Use for testing at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startApolloServer(typeDefs, resolvers);

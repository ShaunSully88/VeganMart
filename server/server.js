const express = require("express");


const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas/index");

const db = require("./config/connection").mongoURI;

const PORT = process.env.PORT || 3001;
const { authMiddleware } = require("./utils/auth");

const server= new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( '/client/build'));
}
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

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

const express = require("express");


const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas/index");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const { authMiddleware } = require("./utils/auth");

const server= new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express(express.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, '../client/images')));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
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

const express = require("express");
const { ApolloServer, gql } = require("apollo-server");
//For Apollo Server Express
// const { ApolloServer } = require("apollo-server-express");
// const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
// const http = require("http");

const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

/////////////////////////////////////////////////////////////////////////////// Using Apollo Server
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

/////////////////////////////////////////////////////////////////////////////// Using Apollo Server Express
// async function startApolloServer(typeDefs, resolvers) {
//   const app = express();
//   const httpServer = http.createServer(app);
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   });

//   await server.start();
//   server.applyMiddleware({ app });
//   await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// }

// startApolloServer(typeDefs, resolvers);

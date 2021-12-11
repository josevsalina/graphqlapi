const { ApolloServer } = require('apollo-server');
const SessionsAPI = require('./datasources/sessions');
const typeDefs = require('./schema.js');

const resolvers = require('./resolvers');

const dataSources = () => ({
  sessionsAPI: new SessionsAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(url);
});

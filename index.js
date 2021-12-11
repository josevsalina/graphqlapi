const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');

const resolvers = require('./resolvers');
const SpeakerAPI = require('./datasources/speakers');
const SessionsAPI = require('./datasources/sessions');

const dataSources = () => ({
  sessionsAPI: new SessionsAPI(),
  speakersAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(url);
});

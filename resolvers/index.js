const mutation = require('./mutation');
const query = require('./query');
const session = require('./session');
module.exports = {
  Query: query,
  Session: session,
  Mutation: mutation,
};

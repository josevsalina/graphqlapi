const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }
  initialize(config) {}

  getSessions({ id, ...args }) {
    return _.filter(sessions, { id: parseInt(id), ...args });
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    return session[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    if (session.length > 0) session[0].favorite = !session[0].favorite;
    return session[0];
  }

  addSession(session) {
    sessions.push(session);
    return {
      id: Math.floor(Math.random() * 100000000),
      favorite: false,
      speakers: [],
      ...session,
    };
  }
}

module.exports = SessionAPI;

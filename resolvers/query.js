module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionsAPI.getSessions(args);
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionsAPI.getSessionById(id);
  },
  speakers: (parent, args, { dataSources }, ingo) => {
    return dataSources.speakersAPI.getSpeakers();
  },
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakersAPI.getSpeakerById(id);
  },
};

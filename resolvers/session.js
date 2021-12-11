const _ = require('lodash');

module.exports = {
  async speakers(session, args, { dataSources }, info) {
    const speakers = await dataSources.speakersAPI.getSpeakers();
    return speakers.filter((i) => {
      return _.filter(session.speakers, { id: i.id }).length > 0;
    });
  },
};

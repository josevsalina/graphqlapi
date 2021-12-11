const { RESTDataSource } = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000';
  }

  async getSpeakers() {
    const data = await this.get('/speakers');
    return data;
  }

  async getSpeakerById(id) {
    const data = await this.get(`/speakers/${id}`);
    return data;
  }
}

module.exports = SpeakerAPI;

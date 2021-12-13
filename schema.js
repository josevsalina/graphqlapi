const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID!): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }
  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }
  input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Here put the reason")
    level: String
    favorite: Boolean
  }
  type Mutation {
    togglefavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }
`;

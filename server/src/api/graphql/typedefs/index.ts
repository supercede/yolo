import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type Category {
    id: String
    slug: String
    translations: [Translation]
  }

  type Translation {
    id: String
    lang: String
    value: String
  }

  type Competitor {
    id: String
    name: String
    score: Int
    translations: [Translation]
  }

  type Selection {
    id: String
    name: String
    odds: Float
  }

  type Market {
    id: String
    name: String
    selections: [Selection]
    translations: [Translation]
  }

  type Payload {
    id: String
    category: Category
    competitors: [Competitor]
    markets: [Market]
    startTime: Date
    updatedAt: Date
  }

  type Event {
    type: String
    payload: Payload
  }

  type Query {
    getEvents: [Event]!
  }

  type Subscription {
    eventUpdate: Event
  }
`;

export default typeDefs;

import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date
  type Query {
    hello(input: String!): String!
  }

  type Mutation {
    hello(input: String!): String!
  }
`;

export default typeDefs;

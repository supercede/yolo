import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query getEvents {
    getEvents {
      type
      payload {
        id
        competitors {
          name
          id
          score
        }
        markets {
          id
          name
          selections {
            id
            name
            odds
          }
        }
        startTime
        updatedAt
      }
    }
  }
`;

export const EVENT_UPDATE = gql`
  subscription EventUpdate {
    eventUpdate {
      type
      payload {
        id
        competitors {
          name
          id
          score
        }
        markets {
          id
          name
          selections {
            id
            name
            odds
          }
        }
        startTime
        updatedAt
      }
    }
  }
`;

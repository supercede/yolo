import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";

const isSSR = typeof window === "undefined";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_HTTP_ENDPOINT!,
});

const wsLink = !isSSR
  ? new GraphQLWsLink(
      createClient({
        url: process.env.NEXT_PUBLIC_API_WS_ENDPOINT!,
      })
    )
  : (null as any);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value

const splitLink =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === "OperationDefinition" &&
            def.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

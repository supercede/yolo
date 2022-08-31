import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "src/graphql/gateway";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ReactNotifications />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

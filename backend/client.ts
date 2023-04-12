import { ApolloClient, InMemoryCache } from "@apollo/client";

/** Client for graphql */
export const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_API_BASE_URL,
	cache: new InMemoryCache(),
});

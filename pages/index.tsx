import { request } from "graphql-request";
import { GET_POKEMONS } from "@/backend/operation";
import { DocumentNode, useApolloClient } from "@apollo/client";
import PokeMon from "@/module/pokemon/PokeMon";
import {
	PokemonVariable,
	StaticPathProps,
	StaticProps,
} from "@/shared/typescript/type";

export default function Home({ data }: StaticProps) {
	const client = useApolloClient();

	client.writeQuery({
		query: GET_POKEMONS,
		variables: { first: 20 },
		data: {
			pokemons: Array.from(data?.pokemons).slice(0, 20),
		},
	});

	client.writeQuery({
		query: GET_POKEMONS,
		variables: { first: 40 },
		data: {
			pokemons: Array.from(data?.pokemons).slice(20, 40),
		},
	});

	client.writeQuery({
		query: GET_POKEMONS,
		variables: { first: 60 },
		data: {
			pokemons: Array.from(data?.pokemons).slice(40, 60),
		},
	});

	return (
		<>
			<PokeMon client={client} />
		</>
	);
}

/** Fetch First 60 Pokemon Data in Build Time */
export async function getStaticProps() {
	const endpoint: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";
	const query: DocumentNode = GET_POKEMONS;
	const variables: PokemonVariable = { first: 60 };

	const data: StaticPathProps = await request(endpoint, query, variables);

	return { props: { data } };
}

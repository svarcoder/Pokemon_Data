import { GET_POKEMONS, GET_SINGLE_POKEMONS } from "@/backend/operation";
import SinglePokeMon from "@/module/singlePokemon/SinglePokeMon";
import Spinner from "@/shared/spinner/Spinner";
import {
	Paths,
	PokemonData,
	PokemonVariable,
	SPokemonVariable,
	SinglePokemonProps,
	StaticPathProps,
} from "@/shared/typescript/type";
import { DocumentNode } from "graphql";
import request from "graphql-request";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function PokemonDetails({ data }: SinglePokemonProps) {
	const router = useRouter();

	if (router.isFallback) {
		return <Spinner />;
	}

	if (!data) {
		return <Spinner />;
	}

	return (
		<>
			<SinglePokeMon data={data} />
		</>
	);
}

/** Fetch First 20 Pokemon Data in Build Time */
export const getStaticPaths: GetStaticPaths = async () => {
	const endpoint: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";
	const query: DocumentNode = GET_POKEMONS;
	const variables: PokemonVariable = { first: 20 };
	const data: StaticPathProps = await request(endpoint, query, variables);

	const paths: Paths = data?.pokemons.map((pokemon: PokemonData) => ({
		params: { PokemonDetails: [pokemon?.id, pokemon?.name] },
	}));

	return { paths, fallback: true };
};

/** Fetch First 20 Single Pokemon Data in Build Time */
export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const { params }: GetStaticPropsContext = context;
	const endpoint: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";
	const query: DocumentNode = GET_SINGLE_POKEMONS;

	if (!params)
		return {
			notFound: true,
			props: {},
		};

	const variables: SPokemonVariable = {
		id: params?.PokemonDetails && params?.PokemonDetails[0],
		name: params?.PokemonDetails && params?.PokemonDetails[1],
	};

	const data: SinglePokemonProps = await request(endpoint, query, variables);

	return { props: { data } };
};

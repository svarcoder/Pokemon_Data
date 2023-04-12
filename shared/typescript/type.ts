import { ApolloClient } from "@apollo/client";

export type PokemonProps = {
	client: ApolloClient<object>;
};

export type PokemonData = {
	id: string;
	number: string;
	name: string;
	weight: {
		minimum: string;
		maximum: string;
	};
	height: {
		minimum: string;
		maximum: string;
	};
	classification: string;
	types: string[];
	resistant: string[];
	weaknesses: string[];
	fleeRate: number;
	maxCP: number;
	maxHP: number;
	image: string;
};

export type SinglePokemonProps = {
	data: {
		pokemon: PokemonData;
	};
};

export type PokemonVariable = {
	first: number;
};

export type SPokemonVariable = {
	id: string | undefined;
	name: string | undefined;
};

export type StaticPathProps = {
	pokemons: PokemonData[];
};

export type StaticProps = {
	data: {
		pokemons: PokemonData[];
	};
};

export type Paths = {
	params: {
		PokemonDetails: string[];
	};
}[];

export type ModalProps = {
	onClose: () => void;
	data: PokemonData;
};

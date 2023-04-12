import { gql } from "@apollo/client";

/** Pokemon Query */
export const GET_POKEMONS = gql`
	query pokemons($first: Int!) {
		pokemons(first: $first) {
			id
			number
			name
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			classification
			types
			resistant
			weaknesses
			fleeRate
			maxCP
			maxHP
			image
		}
	}
`;

/** Single Pokemon Details Query */
export const GET_SINGLE_POKEMONS = gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			id
			number
			name
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			classification
			types
			resistant
			weaknesses
			fleeRate
			maxCP
			maxHP
			image
		}
	}
`;

/** Pokemon Evolution Query */
export const GET_POKEMONS_EVOLUTIONS = gql`
	fragment RecursivePokemonFragment on Pokemon {
		id
		number
		name
		classification
		types
		resistant
		weaknesses
		fleeRate
		maxCP
		maxHP
		image
	}

	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			id
			name
			evolutions {
				id
				number
				name
				classification
				types
				resistant
				weaknesses
				fleeRate
				maxCP
				evolutions {
					...RecursivePokemonFragment
				}
				maxHP
				image
			}
		}
	}
`;

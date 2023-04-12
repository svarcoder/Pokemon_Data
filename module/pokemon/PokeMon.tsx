import { useState } from "react";
import { GET_POKEMONS } from "@/backend/operation";
import Card from "@/shared/card/Card";
import Styles from "./Style.module.css";
import Spinner from "@/shared/spinner/Spinner";
import { useRouter } from "next/router";
import { PokemonProps } from "@/shared/typescript/type";

const PokeMon = ({ client }: PokemonProps) => {
	const router = useRouter();
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<any>(
		client.readQuery({
			query: GET_POKEMONS,
			variables: { first: page * 20 },
		})
	);

	const handleFetchMore = () => {
		setLoading(true);
		client
			.query({
				query: GET_POKEMONS,
				variables: { first: (page + 1) * 20 },
			})
			.then(({ data }) => {
				console.log("Fetched Data", data);
				setData((prevState: any) => {
					if (page > 2) return data;

					return {
						pokemons: [...prevState?.pokemons, ...data?.pokemons],
					};
				});
				setLoading(false);
			});
		setPage((prevState) => prevState + 1);
	};

	return (
		<div className={Styles.pokemon_main}>
			<h2>Pokemon Data</h2>

			<div className={Styles.pokemon_wrapper}>
				{data &&
					data.pokemons.map((item: any) => (
						<div
							key={item?.number + 1}
							onClick={() => router.push(`/${item?.id}/${item?.name}`)}>
							<Card
								cardType={1}
								img={item?.image}
								name={item?.name}
								number={item?.number}
								types={item?.types}
							/>
						</div>
					))}
			</div>

			{loading && <Spinner />}

			{!loading && data?.pokemons?.length && (
				<div className={Styles.button_wrap}>
					<button
						onClick={handleFetchMore}
						type='button'
						className={Styles.glow_button}>
						Load More
					</button>
				</div>
			)}
		</div>
	);
};

export default PokeMon;

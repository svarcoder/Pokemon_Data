import Card from "@/shared/card/Card";
import Styles from "./Style.module.css";
import { useState } from "react";
import Modal from "@/shared/modal/Modal";
import { SinglePokemonProps } from "@/shared/typescript/type";

const SinglePokeMon = ({ data }: SinglePokemonProps) => {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<div className={Styles.pokemon_main}>
			{data && <h2>{`${data?.pokemon?.name} ${data?.pokemon?.number}`}</h2>}

			<div className={Styles.pokemon_wrapper}>
				<Card
					cardType={2}
					img={data?.pokemon?.image}
					types={data?.pokemon?.types}
					classification={data?.pokemon?.classification}
					fleeRate={data?.pokemon?.fleeRate}
					heightMax={data?.pokemon?.height?.maximum}
					heightMin={data?.pokemon?.height?.minimum}
					weightMax={data?.pokemon?.weight?.maximum}
					weightMin={data?.pokemon?.weight?.minimum}
					weaknesses={data?.pokemon?.weaknesses}
					resistant={data?.pokemon?.resistant}
					maxCP={data?.pokemon?.maxCP}
					maxHP={data?.pokemon?.maxHP}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			</div>

			{showModal && (
				<Modal onClose={() => setShowModal(false)} data={data?.pokemon} />
			)}
		</div>
	);
};

export default SinglePokeMon;

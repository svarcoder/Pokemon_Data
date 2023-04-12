import Styles from "./Style.module.css";
import Image from "next/image";

interface Props {
	cardType: number;
	img: string;
	number?: string;
	name?: string;
	types: string[];
	classification?: string;
	fleeRate?: number;
	heightMax?: string;
	heightMin?: string;
	weightMax?: string;
	weightMin?: string;
	resistant?: string[];
	weaknesses?: string[];
	maxCP?: number;
	maxHP?: number;
	showModal?: boolean;
	setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({
	cardType,
	img,
	number,
	name,
	types,
	classification,
	fleeRate,
	heightMax,
	heightMin,
	weightMax,
	weightMin,
	weaknesses,
	resistant,
	maxCP,
	maxHP,
	showModal,
	setShowModal,
}: Props) => {
	return (
		<>
			<div className={cardType === 1 ? Styles?.card : Styles.card_details_wrap}>
				<div className={Styles?.card_main}>
					{cardType === 1 ? (
						<div className={Styles?.card_image}>
							<Image width={150} height={100} src={img} alt='PokeMon_Img' />
							<div className={Styles?.card_footer}>
								<div className={Styles?.card_title}>{number}</div>
								<div className={Styles?.card_title}>{name}</div>
								<div className={Styles?.card_type}>
									{types &&
										types.map((item) => (
											<div key={item} className={Styles?.card_types_element}>
												<div className={Styles?.card_title}>{item}</div>
											</div>
										))}
								</div>
							</div>
						</div>
					) : (
						<div className={Styles?.card_image}>
							<Image width={300} height={200} src={img} alt='PokeMon_Img' />
							<div>
								<div className={Styles?.card_single_details}>
									<h2 className={Styles?.card_title}>
										Classification: {classification}
									</h2>
									<h2 className={Styles?.card_title}>Flee Rate: {fleeRate}</h2>
									<h2 className={Styles?.card_title}>Max CP: {maxCP}</h2>
									<h2 className={Styles?.card_title}>Max HP: {maxHP}</h2>
									<h2 className={Styles?.card_title}>
										Max Height: {heightMax}
									</h2>
									<h2 className={Styles?.card_title}>
										Min Height: {heightMin}
									</h2>
									<h2 className={Styles?.card_title}>
										Max Weight: {weightMax}
									</h2>
									<h2 className={Styles?.card_title}>
										Min Weight: {weightMin}
									</h2>
								</div>
								<div className={Styles?.card_types}>
									<h2 className={Styles?.card_title}>Type:</h2>
									{types &&
										types.map((item) => (
											<div key={item} className={Styles?.card_details}>
												<div className={Styles?.card_title}>{item}</div>
											</div>
										))}
								</div>

								<div className={Styles?.card_types}>
									<h2 className={Styles?.card_title}>Resistant:</h2>
									{resistant &&
										resistant.map((item) => (
											<div key={item} className={Styles?.card_details}>
												<div className={Styles?.card_title}>{item}</div>
											</div>
										))}
								</div>

								<div className={Styles?.card_types}>
									<h2 className={Styles?.card_title}>Weaknesses:</h2>
									{weaknesses &&
										weaknesses.map((item) => (
											<div key={item} className={Styles?.card_details}>
												<div className={Styles?.card_title}>{item}</div>
											</div>
										))}
								</div>
								{setShowModal && (
									<button
										onClick={() => setShowModal(!showModal)}
										className={Styles.glow_button}>
										Evolutions
									</button>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Card;

import { useQuery } from "@apollo/client";
import Styles from "./style.module.css";
import { GET_POKEMONS_EVOLUTIONS } from "@/backend/operation";
import Image from "next/image";
import { ModalProps } from "../typescript/type";

const Modal = ({ onClose, data }: ModalProps) => {
	const {
		loading,
		error,
		data: evoData,
	} = useQuery(GET_POKEMONS_EVOLUTIONS, {
		variables: { id: data?.id, name: data?.name },
		fetchPolicy: "cache-first",
	});

	const handleCloseClick = (e: any) => {
		e.preventDefault();
		onClose();
	};

	return (
		<div className={Styles.modal_overlay}>
			<div className={Styles.modal_container}>
				<div className={Styles.modal_header}>
					<h2>Evolutions</h2>
					<a href='#' onClick={handleCloseClick}>
						x
					</a>
				</div>

				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>Error in API</h2>
				) : (
					<div className={Styles.modal_body}>
						<div className={Styles.modal_content}>
							<Image
								src={data?.image}
								alt='PokeMon_Img'
								height={100}
								width={100}
							/>
							<div className={Styles.modal_content_data}>
								<h2 className={Styles?.modal_title}>{data?.name}</h2>
								<h2 className={Styles?.modal_title}>{data?.number}</h2>
								<div className={Styles?.modal_types}>
									{data &&
										data.types.map((ele: string) => (
											<div key={ele} className={Styles?.modal_details}>
												<div className={Styles?.modal_title}>{ele}</div>
											</div>
										))}
								</div>
							</div>
						</div>

						{evoData &&
							evoData?.pokemon?.evolutions?.map((item: any) => (
								<div key={item?.id} className={Styles.modal_content}>
									<Image src={item?.image} alt={""} height={100} width={100} />
									<div className={Styles.modal_content_data}>
										<h2 className={Styles?.modal_title}>{item?.name}</h2>
										<h2 className={Styles?.modal_title}>{item?.number}</h2>
										<div className={Styles?.modal_types}>
											{item &&
												item.types.map((ele: string) => (
													<div key={ele} className={Styles?.modal_details}>
														<div className={Styles?.modal_title}>{ele}</div>
													</div>
												))}
										</div>
									</div>
								</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;

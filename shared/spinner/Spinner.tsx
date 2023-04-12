import Styles from "./style.module.css";

const Spinner = () => {
	return (
		<div className={Styles.lds_ring}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Spinner;

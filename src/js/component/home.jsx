import React from "react";
import Clock from "./clock";
import Number from "./number";
import PropTypes from "prop-types";

const Home = props => {
	return (
		<div className="row container-fluid d-flex justify-content-center rounded">
			<Clock />
			<Number number={props.hora2} />
			<Number number={props.hora1} />
			<Number number={props.minuto2} />
			<Number number={props.minuto1} />
			<Number number={props.segundo2} />
			<Number number={props.segundo1} />
		</div>
	);
};

Home.propTypes = {
	segundo1: PropTypes.number,
	segundo2: PropTypes.number,
	minuto1: PropTypes.number,
	minuto2: PropTypes.number,
	hora1: PropTypes.number,
	hora2: PropTypes.number
};

export default Home;

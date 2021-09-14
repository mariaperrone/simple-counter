import React from "react";
import PropTypes from "prop-types";

const Number = props => {
	return <h1 className="text-light p-5">{props.number}</h1>;
};

Number.propTypes = {
	number: PropTypes.number
};

export default Number;

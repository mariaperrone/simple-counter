import React from "react";
import Clock from "./clock";
import FirstNumber from "./firstnumber";
import SecondNumber from "./secondnumber";
import ThirdNumber from "./thirdnumber";
import FourthNumber from "./fourthnumber";
import FifthNumber from "./fifthnumber";
import SixthNumber from "./sixthnumber";

const Home = () => {
	return (
		<div className="row">
			<Clock className="col" />
			<FirstNumber className="col" />
			<SecondNumber className="col" />
			<ThirdNumber className="col" />
			<FourthNumber className="col" />
			<FifthNumber className="col" />
			<SixthNumber className="col" />
		</div>
	);
};

export default Home;

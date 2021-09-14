//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
let segundo1 = 0;
let segundo2 = 0;
let minuto1 = 0;
let minuto2 = 0;
let hora1 = 0;
let hora2 = 0;

setInterval(() => {
	segundo1++;
	if (segundo1 >= 10) {
		segundo2++;
		segundo1 = 0;
	}
	if (segundo2 >= 10) {
		minuto1++;
		segundo2 = 0;
	}
	if (minuto1 >= 10) {
		minuto2++;
		minuto1 = 0;
	}
	if (minuto2 >= 10) {
		hora1++;
		minuto2 = 0;
	}
	if (hora1 >= 10) {
		hora2++;
		hora1 = 0;
	}
	if (hora2 >= 10) {
		hora2 = 0;
		hora1 = 0;
		minuto2 = 0;
		minuto1 = 0;
		segundo2 = 0;
		segundo1 = 0;
	}
	ReactDOM.render(
		<Home
			segundo1={segundo1}
			segundo2={segundo2}
			minuto1={minuto1}
			minuto2={minuto2}
			hora1={hora1}
			hora2={hora2}
		/>,
		document.querySelector("#app")
	);
}, 1000);

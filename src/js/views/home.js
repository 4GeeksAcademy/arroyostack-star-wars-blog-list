import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	// const planets = localStorage.getItem('planets');
	// console.log(JSON.parse(planets));

	const handleClick = () => {
		console.log(store.planets);
	};

	return (
		<>
			<div className="text-center mt-5">
				<h1>Hello mars</h1>
				<div className="d-grid gap-2">
					<button onClick={ handleClick } type="button" className="btn btn-primary">Button</button>
				</div>
			</div>
		</>
	);
};

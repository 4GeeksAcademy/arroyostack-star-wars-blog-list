import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardGrid } from "../component/CardGrid.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {

		console.log(store);
	}, [ store ]);
	const handleClick = () => {

		console.log(store);
	};
	return (
		<>
			<div className="text-center mt-5">
				<h1>Hello mars</h1>
				<div className="d-grid gap-2">
					<button onClick={ handleClick } type="button" name="" id="" className="btn btn-primary">Button</button>
				</div>
			</div>
		</>
	);
};

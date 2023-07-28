import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardGrid } from "../component/CardGrid.jsx";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [ redirect, setRedirect ] = useState(false);
	useEffect(() => {

		console.log(store);
	}, [ store ]);

	const redirectFromIntro = () => {
		setTimeout(() => {
			setRedirect(true);
		}, 2000);
	};

	useEffect(() => {
		redirectFromIntro();
	}, []);


	return (
		<>
			{ redirect && <Navigate to="/planets" replace /> }
			<div id="intro-view" className="px-4 py-5 my-5 text-center">
				<h1 className="display-5 fw-bold">StarWars</h1>
				<h4>4Geeks Academy Assessment</h4>
			</div>
		</>
	);
};

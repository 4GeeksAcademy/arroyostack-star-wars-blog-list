import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const handleClick = () => {
		localStorage.clear();
	};
	return (
		<>

			<nav className="navbar fixed-top navbar-expand-lg navbar-light card-opacity">
				<div className="container-fluid">
					<a className="text-navbar navbar-brand text-warning" href="#">StarWars BlogList</a>
					<button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav ms-auto">
							<Link to="/planets">Planets</Link>
							<Link to="/people">People</Link>
							<Link to="/vehicle">Vehicles</Link>
							<Link to="/liked">Liked</Link>

							{/* test to empty local storage */ }
							{/* <a href="" onClick={ handleClick }>Clickme storage</a> */ }
						</ul>
					</div>
				</div>
			</nav>

		</>
	);
};

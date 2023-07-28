import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const handleClick = () => {
		localStorage.clear();
	};
	return (
		<>

			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand bg-light" href="#">Brand</a>
					<button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav ms-auto">
							<Link to="/planets">Planets</Link>
							<Link to="/people">people</Link>
							<Link to="/vehicle">vehicles</Link>

							<Link to="/liked">liked</Link>
							<a href="" onClick={ handleClick }>Clickme storage</a>
						</ul>
					</div>
				</div>
			</nav>

		</>
	);
};

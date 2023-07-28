import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-dark mb-3m">
				<ul>
					<Link to="/planets">Planets</Link>
					<Link to="/people">people</Link>
					<Link to="/vehicle">vehicles</Link>

					<Link to="/liked">liked</Link>
				</ul>

			</nav>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Brand</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav ms-auto">
							<Link to="/planets">Planets</Link>
							<Link to="/people">people</Link>
							<Link to="/vehicle">vehicles</Link>

							<Link to="/liked">liked</Link>
						</ul>
					</div>
				</div>
			</nav>

		</>
	);
};

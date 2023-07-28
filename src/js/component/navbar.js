import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<ul>
				<Link to="/planets">Planets</Link>
				<Link to="/people">people</Link>
				<Link to="/vehicle">vehicles</Link>

				<Link to="/liked">liked</Link>
			</ul>

		</nav>
	);
};

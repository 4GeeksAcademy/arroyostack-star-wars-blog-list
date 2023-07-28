import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetsView } from "./views/PlanetsView.jsx";
import { PeopleViews } from "./views/PeopleViews.jsx";
import { VehicleView } from "./views/VehiclesView.jsx";
import { LikedView } from "./views/LikedView.jsx";




const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={ basename }>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={ <Home /> } />
						<Route path="/planets" element={ <PlanetsView /> } />
						<Route path="/people" element={ <PeopleViews /> } />
						<Route path="/vehicle" element={ <VehicleView /> } />
						<Route path="/liked" element={ <LikedView /> } />
						<Route path="*" element={ <h1>Not found!</h1> } />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

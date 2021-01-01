import React from "react";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Logout from "./Logout";

function Routes() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route path="/reservation" component={Reservation} />
				<Route path="/menu" component={Menu} />
				<Route path="/orders" component={Orders} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default Routes;

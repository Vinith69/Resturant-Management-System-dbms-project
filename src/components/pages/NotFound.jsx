import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<div className="NotFound">
			<h1>Page Not Found, Click Home button to go back</h1>
			<NavLink to="/">
				<button className="btn-1">Home</button>
			</NavLink>
		</div>
	);
}

export default NotFound;

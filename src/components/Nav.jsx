import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";
// import Reducer from "./Reducer";
import { AuthContext } from "../App";
import Axios from "axios";

function Nav({ color }) {
	const [isExpanded, setIsExpanded] = useState(true);
	const [scroll, setScroll] = useState(false);
	Axios.defaults.withCredentials = true;

	const authContext = useContext(AuthContext);
	// console.log(authContext.state.isLoggedIn);

	const handleScroll = () => {
		const offset = window.scrollY;
		// console.log(offset);
		if (offset > 50) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		const checkLogin = async () => {
			// const url = "http://localhost:5000/login";
			const url = "http://localhost/dbmsCollege/login.php";

			await Axios.get(url).then(response => {
				if (response.data.msg === "Logged In") {
					// setIsLoggedIn(true);
					console.log("check", response.data);
					// authContext.dispatch({ type: "logIn" });
				} else {
					authContext.dispatch({ type: "logOut" });
				}
			});
		};
		checkLogin();
	}, []);

	const logOut = async () => {
		// const url = "http://localhost:5000/logout";
		const url = "http://localhost/dbmsCollege/logout.php";

		await Axios.get(url).then(response => {
			// console.log(response);
			if (response.data.msg === "Logged Out") {
				// setIsLoggedIn(true);
				// console.log("Hello Clicked");
				authContext.dispatch({ type: "logOut" });
				console.log(authContext.state.isLoggedIn);
			}
		});
	};

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
		// console.log("true", isExpanded);
	};

	return (
		<div className={`nav-bar ${scroll && "sticky"} ${color && color} `}>
			<NavLink to="/" activeClassName="" className="nav-logo">
				<h1>
					V<span>P</span>N
				</h1>
			</NavLink>
			<nav className="nav">
				<i
					className="fa fa-bars"
					aria-hidden="true"
					onClick={e => handleToggle(e)}
				/>

				<ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
					<NavLink activeClassName="active" exact to="/">
						<li>Home</li>
					</NavLink>
					<NavLink activeClassName="active" to="/about">
						<li>About</li>
					</NavLink>
					<NavLink activeClassName="active" to="/menu">
						<li>Menu</li>
					</NavLink>
					<NavLink exact activeClassName="active" to="/reservation">
						<li>Reservation</li>
					</NavLink>
				</ul>
			</nav>
			{/* {console.log(isLoggedIn)} */}
			{authContext.state.isLoggedIn === true ? (
				<NavLink
					activeClassName="active"
					className={`btn ${!isExpanded && "is-expanded"}`}
					onClick={logOut}
					to="/"
				>
					<li>Logout</li>
				</NavLink>
			) : (
				<NavLink
					activeClassName="active"
					className={`btn ${!isExpanded && "is-expanded"}`}
					to="/login"
				>
					<li>Login</li>
				</NavLink>
			)}
		</div>
	);
}

export default Nav;

import React, { useEffect, useContext } from "react";
import { loginSpecifier } from "./../../validation/FormSpecifier";
import { validateLogin } from "./../../validation/validate";
// import Reducer, { initialState } from "./../Reducer";
import FormComponent from "./../FormComponent";
import { useHistory } from "react-router";
import Axios from "axios";
import "./Login.css";

import { AuthContext } from "./../../App";
import Footer from "../Footer";

function Login() {
	Axios.defaults.withCredentials = true;
	let history = useHistory();
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [state, dispatch] = useReducer(Reducer, initialState);
	const authContext = useContext(AuthContext);

	useEffect(() => {
		const checkLogin = async () => {
			// const url = "http://localhost:5000/login";
			const url = "http://localhost/dbmsCollege/login.php";

			await Axios.get(url).then(response => {
				// console.log(response);
				if (response.data.msg === "Logged In") {
					// setIsLoggedIn(true);
					authContext.dispatch({ type: "logIn" });
					history.push("/menu");
				}
			});
		};
		checkLogin();
	}, []);

	const loginData = async e => {
		// const url = "http://localhost:5000/login";
		const url = "http://localhost/dbmsCollege/login.php";

		await Axios.post(url, e).then(response => {
			console.log(response);
			// if (response.data.length > 0) {
			if (response.data.msg === "Logged in") {
				console.log("Logged in");
				// setIsLoggedIn(true);
				authContext.dispatch({ type: "logIn" });
				history.push("/menu");
			} else {
				console.log("not");
				authContext.dispatch({ type: "logOut" });
				// setIsLoggedIn(false);
			}
		});
	};
	return (
		<>
			<div className="login-container">
				{/* <h1>{name}</h1> */}
				<FormComponent
					initialValues={{
						email: "",
						password: "",
					}}
					name={loginSpecifier.name}
					label={loginSpecifier.label}
					type={loginSpecifier.type}
					validate={validateLogin}
					buttonName={"Login"}
					className="login-inner-container"
					Message="New? Click here to Register "
					MessagePath="/register"
					onSubmit={loginData}
				/>
			</div>
			<Footer />
		</>
	);
}

export default Login;

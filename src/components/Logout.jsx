import React, { useEffect, useContext } from "react";
import { AuthContext } from "../App";
import Axios from "axios";

function Logout() {
	Axios.defaults.withCredentials = true;

	const authContext = useContext(AuthContext);
	useEffect(() => {
		const logOut = async () => {
			const url = "http://localhost:5000/logout";

			await Axios.get(url).then(response => {
				if (response.data.msg === "Logged Out") {
					// setIsLoggedIn(true);
					console.log(response.data);
					authContext.dispatch({ type: "logOut" });
				}
			});
		};
		logOut();
	}, []);

	return (
		<div>
			<h1>Nothing</h1>
		</div>
	);
}

export default Logout;

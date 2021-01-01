import React from "react";
import { registerSpecifier } from "../../validation/FormSpecifier";
import { validateRegister } from "../../validation/validate";
import { useHistory } from "react-router";
import FormComponent from "./../FormComponent";
import Axios from "axios";
import Footer from "./../Footer";

function Register() {
	const url = "http://localhost:5000/register";
	let history = useHistory();

	const fetchData = async e => {
		await Axios.post(url, e).then(response => {
			// console.log(response);
			if (
				response.data.msg === "Inserted Successfully" ||
				response.data.affectedRows === 1
			) {
				history.push("/login");
			}
		});
	};
	return (
		<>
			<div className="login-container register-container">
				<FormComponent
					initialValues={{
						userName: "",
						email: "",
						address: "",
						phno: "",
						password: "",
						confirmPassword: "",
					}}
					name={registerSpecifier.name}
					label={registerSpecifier.label}
					type={registerSpecifier.type}
					validate={validateRegister}
					buttonName="Register"
					className="register-inner-container"
					Message="Already Have an Account? Click here login "
					MessagePath="/login"
					onSubmit={fetchData}
				/>
			</div>
			<Footer />
		</>
	);
}

export default Register;

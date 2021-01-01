import React from "react";
import { Formik, Form } from "formik";
import { Button, TextField } from "@material-ui/core";
import { NavLink } from "react-router-dom";
// import CssTextField from "../validation/textStyle";

function FormComponent({
	initialValues,
	name,
	type,
	label,
	validate,
	buttonName,
	className,
	Message,
	MessagePath,
	onSubmit,
}) {
	// console.log(name);
	return (
		<div>
			<br />
			<h1>{buttonName} Form</h1>
			<br />
			<Formik
				initialValues={initialValues}
				validationSchema={validate}
				onSubmit={values => onSubmit(values)}
			>
				{({ values, errors, touched, handleBlur, handleChange }) => (
					<Form noValidate className={className}>
						{name.map((a, i) => (
							<React.Fragment key={a}>
								<TextField
									values={values}
									key={a}
									name={a}
									type={type[i]}
									onChange={handleChange}
									onBlur={handleBlur}
									label={label[i]}
									autoComplete="off"
									className="sdsd"
									// error={touched.a && errors.a && true}
									error={touched[a] && errors[a] && true}
									helperText={touched[a] && errors[a]}
								/>

								{/* <ErrorMessage key={a + 1} name={a} /> */}
							</React.Fragment>
						))}
						<Button type="submit" variant="contained">
							{buttonName}
						</Button>
						<NavLink to={MessagePath}>{Message}</NavLink>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default FormComponent;

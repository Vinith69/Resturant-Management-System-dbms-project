const yup = require("yup");
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const validateLogin = yup.object().shape({
	email: yup.string().label("Email").email().required(),
	password: yup.string().label("Password").required(),
});

export const validateRegister = yup.object().shape({
	userName: yup.string().label("Username").min(4).required(),
	email: yup.string().label("Email").email().required(),
	address: yup.string().label("Address").min(5).required(),
	phno: yup
		.string()
		.matches(phoneRegExp, "Number is not valid")
		.test("phno", "Must be exactly 10 digits", val => {
			if (val) return val.length === 10;
		})
		.required(),

	password: yup.string().label("Password").min(7).max(255).required(),
	confirmPassword: yup
		.string()
		.label("Confirm Password")
		.oneOf([yup.ref("password"), null], "Passwords do not Match")
		.required(),
});

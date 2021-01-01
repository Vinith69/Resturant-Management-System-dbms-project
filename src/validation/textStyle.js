import { makeStyles } from "@material-ui/styles";

const CssTextField = makeStyles(theme => ({
	input: {
		"& label, label.Mui-focused": {
			color: "white",
		},
		"& .MuiInput-underline:after, .MuiInput-underline:before,": {
			borderBottomColor: "white",
		},
		// pass as input props
		color: "white",
		width: "20rem",
		marginBottom: "10px",

		// on hover to the input make the before of underline as white
		"&:hover": {
			"& .MuiInput-underline:before": {
				borderBottomColor: "#dcdde1",
			},
		},
	},
	error: {
		"&label, label.Mui-focused": {
			color: "red",
		},
		"& .MuiInput-underline:after, .MuiInput-underline:before,": {
			borderBottomColor: "red",
		},
	},
	button: {
		// backgroundColor: "#535c68",
		width: "20rem",
		position: "absolute",
		bottom: "4.5rem",
	},
}));

export default CssTextField;

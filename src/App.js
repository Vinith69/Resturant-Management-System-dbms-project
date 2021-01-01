import "./App.css";
import React, { useReducer } from "react";
import Routes from "./components/Routes";
import Reducer, { initialState } from "../src/components/Reducer";
export const AuthContext = React.createContext();

function App() {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<div className="App">
			<AuthContext.Provider value={{ state, dispatch }}>
				<Routes />
			</AuthContext.Provider>
		</div>
	);
}

export default App;

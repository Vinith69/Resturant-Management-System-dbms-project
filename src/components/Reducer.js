export const initialState = { isLoggedIn: false };

export default function reducer(state, action) {
	switch (action.type) {
		case "logIn":
			return { isLoggedIn: true };

		case "logOut":
			return { isLoggedIn: false };
		default:
			break;
	}
}

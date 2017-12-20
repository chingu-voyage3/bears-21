// types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


// action creators
export const loginAction = () => {
	return {
		type: LOGIN,
	};
}

export const logoutAction = () => {
	return {
		type: LOGOUT,
	};
}

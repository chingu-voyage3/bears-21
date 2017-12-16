// types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


// action creators
export function login() {
	return {
		type: LOGIN,
	};
}

export function logout() {
	return {
		type: LOGOUT,
	};
}

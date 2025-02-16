export function login(account) {
	return {
		type: "LOGIN",
		payload: account,
	};
}

export function logout(account) {
	return {
		type: "LOGOUT",
		payload: null,
	};
}

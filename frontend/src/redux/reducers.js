import {
	LOGIN,
	LOGOUT,
} from './actions.js';


const initialState = {
	user: null,
};



function app(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {user: "in"};
		case LOGOUT:
			return {user: null};

		default:
			return state;
	}


}

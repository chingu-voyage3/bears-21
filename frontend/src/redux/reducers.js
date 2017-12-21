import {
	LOGIN,
	LOGOUT,
} from './actions.js';


const initialState = {
	user: false,
};


export default function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {user: true};
		case LOGOUT:
			return {user: false};
		default:
			return state;
	}


}

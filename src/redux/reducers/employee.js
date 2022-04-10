import * as actionType from "../actionTypes";
const employeeReducer = (state = [], action) => {
	switch (action.type) {
		case actionType.GET_EMPLOYEES:
			return action.data;
		case actionType.CREATE_EMPLOYEE:
			return [...state, action.data];
		default:
			return state;
	}
};

export default employeeReducer;

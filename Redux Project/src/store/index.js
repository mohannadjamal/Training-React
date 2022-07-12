//import { legacy_createStore as createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from "./auth";


//export const INCREMENT = "INCREMENT";
//export const DECREMENT = "DECREMENT";
//export const INCREASE = "INCREASE";
//export const TOGGLE = "TOGGLE";

//const counterReducer = (state = initialState, action) => {
//	switch (action.type) {
//		case INCREMENT:
//			return {
//				counter: state.counter + 1,
//				showCounter: state.showCounter
//			};
//		case DECREMENT:
//			return {
//				counter: state.counter - 1,
//				showCounter: state.showCounter
//			};
//		case INCREASE:
//			return {
//				counter: state.counter + action.amount,
//				showCounter: state.showCounter
//			};
//		case TOGGLE:
//			return {
//				showCounter: !state.showCounter,
//				counter: state.counter
//			};
//		default:
//			return state;
//	}
//};

//const store = createStore(counterReducer);
const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer
	}
});

export default store;
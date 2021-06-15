import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducers";

const INITIAL_STATE = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {
	store = createStore(
		rootReducer,
		INITIAL_STATE,
		compose(
			applyMiddleware(...middleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
} else {
	store = createStore(
		rootReducer,
		INITIAL_STATE,
		compose(applyMiddleware(...middleware))
	);
}

export default store;

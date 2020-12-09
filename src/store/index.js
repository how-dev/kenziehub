import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";

const globalReducer = combineReducers ({
    key: reducer,
})

const store = createStore(globalReducer, applyMiddleware(thunk))

export default store;

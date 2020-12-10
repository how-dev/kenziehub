import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tokenReducer from "./modules/token/reducer";

const reducers = combineReducers ({
    key: tokenReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;

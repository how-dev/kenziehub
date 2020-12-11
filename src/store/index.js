import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tokenReducer from "./modules/token/reducer";
import favoriteList from "./modules/favorites/reducer"
const reducers = combineReducers ({
    key: tokenReducer,
    favorite: favoriteList,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

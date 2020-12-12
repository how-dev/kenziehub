import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tokenReducer from "./modules/token/reducer";
import favoriteList from "./modules/favorites/reducer";
import userIdReducer from "./modules/users/reducer";
const reducers = combineReducers({
  key: tokenReducer,
  favorite: favoriteList,
  user: userIdReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

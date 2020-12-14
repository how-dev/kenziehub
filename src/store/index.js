import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tokenReducer from "./modules/token/reducer";
import favoriteList from "./modules/favorites/reducer";
import userReducer from "./modules/user/reducer";

const reducers = combineReducers({
  key: tokenReducer,
  favorite: favoriteList,
  user: userReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

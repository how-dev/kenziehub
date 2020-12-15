import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tokenReducer from "./modules/token/reducer";
import favoriteList from "./modules/favorites/reducer";
import userReducer from "./modules/user/reducer";
import autoFillEmailReducer from "./modules/autoFill/emailReducer"
import autoFillPswdReducer from "./modules/autoFill/passwordReducer"

const reducers = combineReducers({
  key: tokenReducer,
  favorite: favoriteList,
  user: userReducer,
  autoFillEmail: autoFillEmailReducer,
  autoFillPswd: autoFillPswdReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tokenReducer from "./modules/token/reducer";
import userReducer from "./modules/user/reducer";
import usersReducer from "./modules/users/reducer";

const reducers = combineReducers({
  key: tokenReducer,
  user: userReducer,
  users: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

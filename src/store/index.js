import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tokenReducer from "./modules/token/reducer";
import userReducer from "./modules/user/reducer";

const reducers = combineReducers({
  key: tokenReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

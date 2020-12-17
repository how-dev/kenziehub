import { getToken } from "./actions";

export const getTokenThunk = (token) => {
  return (dispatch, getState) => {
    if (token) {
      localStorage.setItem("token", token);
      dispatch(getToken(token));
    }
  };
};

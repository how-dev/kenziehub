import { login, logout } from "./actions";

export const loginThunk = (user) => (dispatch, setState) => {
  localStorage.setItem("userData", JSON.stringify(user));
  dispatch(login(user));
};

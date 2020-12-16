import axios from "axios";
import { getUsers } from "./actions";

export const getUsersThunk = (pageCount, haveNext, setHaveNext) => (
  dispatch
) => {
  axios
    .get(`https://kenziehub.me/users?perPage=20&page=${pageCount}`)
    .then((res) => {
      dispatch(getUsers(res.data));
      if (res.data.length < 20) {
        setHaveNext(!haveNext);
      }
    });
};

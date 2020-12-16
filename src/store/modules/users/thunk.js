import axios from "axios";
import { getUsers } from "./actions";

export const getUsersThunk = (pageCount, haveNext, setHaveNext) => (
  dispatch
) => {
  axios
    .get(`https://kenziehub.me/users?perPage=20&page=${pageCount}`)
    .then((res) => {
      res.data.map((user) => dispatch(getUsers(user)));
      if (res.data.length < 20) {
        setHaveNext(!haveNext);
      }
    });
};

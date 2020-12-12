import axios from "axios";

const baseUrl = "https://kenziehub.me/";

export const signUpRequest = (data, setResponse, setResponseError) => {
  console.log(data);
  axios.post(`${baseUrl}users`, data).then((res) => {
    res.id ? setResponse(res.id) : setResponseError(res.message);
  });
};

export const usersRequest = (setList, page) => {
  axios.get(`${baseUrl}users?perPage=${page}`).then((response) => {
    setList(response.data);
  });
};

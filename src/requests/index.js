import axios from "axios";

const baseUrl = "https://kenziehub.me/";

export const signUpRequest = (data, setResponse, setError) => {
  console.log(data);
  axios.post(`${baseUrl}users`, data).then((res) => {
    res.id ? setResponse(res.id) : setError(res.message);
  });
};

export const usersRequest = (setList) => {
  axios.get(`${baseUrl}users?perPage=50`).then((response) => {
    setList(response.data);
  });
};

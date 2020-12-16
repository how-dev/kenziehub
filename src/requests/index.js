import axios from "axios";

const baseUrl = "https://kenziehub.me/";

export const SignUpRequest = (data, setResponse, setResponseError) => {
    axios.post(`${baseUrl}users`, data).then((res) => {
      res.id ? setResponse(res.id) : setResponseError(res.message);
    });
};

export const usersRequest = (list, setList, page, haveNext, setHaveNext) => {
  axios.get(`${baseUrl}users?perPage=20&page=${page}`).then((response) => {
    setList([...list, ...response.data]);
    if (response.data.length < 20) {
      setHaveNext(!haveNext);
    }
  });
};

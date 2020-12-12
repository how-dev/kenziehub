import axios from "axios";

const baseUrl = "https://kenziehub.me/";

export const signUpRequest = (data, setResponse, setResponseError) => {
  console.log(data);
  axios.post(`${baseUrl}users`, data).then((res) => {
    res.id ? setResponse(res.id) : setResponseError(res.message);
  });
};

export const usersRequest = (list, setList, page, haveNext, setHaveNext) => {
  axios.get(`${baseUrl}users?perPage=20&page=${page}`).then((response) => {
    setList([...list, ...response.data]);
    console.log(
      "vendo header " + response.headers.nexturl,
      " resposta " + response.data.length
    );

    if (response.data.length < 20) {
      console.log("ta aqui");
      setHaveNext(!haveNext);
    }
  });
};

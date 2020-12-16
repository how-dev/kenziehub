import axios from "axios";

const baseUrl = "https://kenziehub.me/";

export const SignUpRequest = (data, setResponse, setResponseError) => {
  axios.post(`${baseUrl}users`, data).then((res) => {
    res.id ? setResponse(res.id) : setResponseError(res.message);
  });
};

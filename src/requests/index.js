import axios from "axios";

const baseUrl = "https://kenziehub.me/";

export const signUpRequest = ({ data, setResponse, setError }) => {
  axios.post(`${baseUrl}users`, data).then((res) => {
    res.id ? setResponse(res.id) : setError(res.message);
  });
};

import axios from "axios";

const baseUrl = "https://kenziehub.me/";

export const signUpRequest = ({ data, setResponse }) => {
  axios.post(`${baseUrl}users`, data).then((res) => {
    setResponse(res.id);
  });
};

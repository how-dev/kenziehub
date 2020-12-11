import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { Container } from "../../globalStyles";
import axios from "axios";

const UsersList = () => {
  const [list, setList] = useState([]);

  const usersRequest = () => {
    const baseURL = "https://kenziehub.me/users?perPage=15";
    axios.get(`${baseURL}`).then((response) => {
      setList(response.data);
    });
  };

  const requestUsers = () => {
    usersRequest();
  };

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <>
      <h2>Usuários cadastrados</h2>
      <Container>
        {list.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </Container>
    </>
  );
};
export default UsersList;

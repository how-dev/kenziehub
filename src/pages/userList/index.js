import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { Container } from "./style.js";
import { usersRequest } from "../../requests";

const UsersList = () => {
  const [list, setList] = useState([]);

  const requestUsers = () => {
    usersRequest(setList);
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

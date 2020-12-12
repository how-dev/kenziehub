import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { Container } from "./style.js";
import { usersRequest } from "../../requests";
import { TextField } from "@material-ui/core";

const UsersList = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const requestUsers = () => {
    usersRequest(setList);
  };

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <>
      <Container>
        <TextField
          id="search"
          helperText="Buscar Devs"
          type="search"
          color="primary"
          onChange={handleSearch}
          value={searchInput}
        />
      </Container>
      <Container>
        {searchInput
          ? list.filter((user) =>
              user.name
                ?.toLowerCase()
                .includes(searchInput))
                .map((user, index) => <UserCard key={index} user={user} />)
          : list.map((user, index) => <UserCard key={index} user={user} />)}
      </Container>
    </>
  );
};
export default UsersList;

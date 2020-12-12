import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { Container } from "./style.js";
import { usersRequest } from "../../requests";
import { TextField } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
const UsersList = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(15);
  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const requestUsers = () => {
    usersRequest(setList, page);
  };

  useEffect(() => {
    requestUsers();
  }, [page]);

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

      <InfiniteScroll
        dataLength={list.length}
        next={() => setPage(page + 15)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Isso é tudo pessoal</b>
          </p>
        }
      >
        <Container>
          {searchInput
            ? list
                .filter((user) =>
                  user.name?.toLowerCase().includes(searchInput)
                )
                .map((user, index) => <UserCard key={index} user={user} />)
            : list.map((user, index) => <UserCard key={index} user={user} />)}
        </Container>
      </InfiniteScroll>
    </>
  );
};
export default UsersList;

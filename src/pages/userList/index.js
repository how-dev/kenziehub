import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { Container } from "./style.js";
import { usersRequest } from "../../requests";
import { TextField } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
const UsersList = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [haveNext, setHaveNext] = useState(true);
  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const requestUsers = () => {
    usersRequest(list, setList, page, setHaveNext);
  };
  const handlePage = () => {
    setPage(page + 1);
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
        next={handlePage}
        hasMore={haveNext}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>that's all folks!</b>
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

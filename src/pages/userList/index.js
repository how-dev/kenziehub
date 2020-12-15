import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { usersRequest } from "../../requests";
import { TextField } from "@material-ui/core";
import { BounceLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from "@material-ui/icons/Search";

const UsersList = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [haveNext, setHaveNext] = useState(true);
  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const requestUsers = () => {
    usersRequest(list, setList, page, haveNext, setHaveNext);
  };
  const handlePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    requestUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (list.length !== 0) {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextField
            id="search"
            variant="outlined"
            type="search"
            onChange={handleSearch}
            value={searchInput}
            margin="dense"
            label={
              <span style={{ display: "flex", alignItems: "center" }}>
                <SearchIcon />
                Buscar
              </span>
            }
            style={{ minWidth: "30vw", margin: "1.5em" }}
          />
        </div>

        <InfiniteScroll
          dataLength={list.length}
          next={handlePage}
          hasMore={haveNext}
          loader={
            <div
              style={{ margin: 50, display: "flex", justifyContent: "center" }}
            >
              <BounceLoader color="#E07A5F" />
            </div>
          }
          endMessage={
            <p
              style={{
                textAlign: "center",
                color: "#bbb",
                marginBottom: "5em"
              }}
            >
              Não há mais devs para mostrar.
            </p>
          }
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "2em"
            }}
          >
            {searchInput
              ? list
                  .filter((user) =>
                    user.name?.toLowerCase().includes(searchInput)
                  )
                  .map((user, index) => <UserCard key={index} user={user} />)
              : list.map((user, index) => <UserCard key={index} user={user} />)}
          </div>
        </InfiniteScroll>
      </>
    );
  } else {
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <BounceLoader color="#E07A5F" />
      </div>
    );
  }
};
export default UsersList;

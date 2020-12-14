import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { usersRequest } from "../../requests";
import { TextField } from "@material-ui/core";
import { BounceLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from '@material-ui/icons/Search';

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
    console.log("ta true? " + haveNext);
  }, [page]);

  return (
    <>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        
        <TextField
          id="search"
          variant="outlined"
          type="search"
          onChange={handleSearch}
          value={searchInput}
          margin="dense"
          label={<span style={{display: "flex", alignItems: "center"}}><SearchIcon />Buscar</span>}
        />
      </div>

      <InfiniteScroll
        dataLength={list.length}
        next={handlePage}
        hasMore={haveNext}
        loader={<BounceLoader color="#3D405B"/>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>that's all folks!</b>
          </p>
        }
      >
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",}}>
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
};
export default UsersList;

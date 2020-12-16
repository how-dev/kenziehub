import UserCard from "../../components/userCard/index";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { BounceLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from "@material-ui/icons/Search";
import { motion } from "framer-motion";
import { getUsersThunk } from "../../store/modules/users/thunk";
import { useDispatch, useSelector } from "react-redux";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [searchInput, setSearchInput] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [haveNext, setHaveNext] = useState(true);
  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handlePage = () => {
    setPageCount(pageCount + 1);
  };

  useEffect(() => {
    dispatch(getUsersThunk(pageCount, haveNext, setHaveNext));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  if (users.length !== 0) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
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
        </motion.div>
        <InfiniteScroll
          dataLength={users.length}
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
              ? users
                  .filter((user) =>
                    user.name?.toLowerCase().includes(searchInput)
                  )
                  .map((user, index) => {
                    return (
                      <motion.div
                        initial={{ marginTop: 300 }}
                        animate={{ marginTop: 0 }}
                        exit={{ marginTop: 300 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          <UserCard  user={user} />
                        </motion.div>
                      </motion.div>
                    );
                  })
              : users.map((user, index) => {
                  return (
                    <motion.div
                      initial={{ marginTop: 300 }}
                      animate={{ marginTop: 0 }}
                      exit={{ marginTop: 300 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <UserCard user={user} />
                      </motion.div>
                    </motion.div>
                  );
                })}
          </div>
        </InfiniteScroll>
        {!haveNext && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "7vh",
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
                    Não encontrou o dev que procurava? Busque aqui!
                  </span>
                }
                style={{ minWidth: "30vw", margin: "1.5em" }}
              />
            </div>
          </motion.div>
        )}
      </>
    );
  } else {
    return (
      <div style={{ position: "absolute", top: "50%", left: "45%" }}>
        <BounceLoader color="#E07A5F" />
      </div>
    );
  }
};
export default UsersList;

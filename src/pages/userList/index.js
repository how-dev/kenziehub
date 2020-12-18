import { useSelector } from "react-redux";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import { TextField } from "@material-ui/core";
import { motion } from "framer-motion";
import SearchIcon from "@material-ui/icons/Search";
import UserCard from "../../components/userCard/index";
import InfiniteScroll from "react-infinite-scroll-component";

const UsersList = ({ pageCount, haveNext, setPageCount }) => {
  const users = useSelector((state) => state.users);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handlePage = () => {
    setPageCount(pageCount + 1);
  };

  if (users.length !== 0) {
    return (
      <div style={{ marginTop: "7vh" }}>
        <InfiniteScroll
          dataLength={users.length}
          next={handlePage}
          hasMore={haveNext}
          loader={
            <div
              style={{
                margin: 50,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BounceLoader color="#E07A5F" />
            </div>
          }
          endMessage={
            <p
              style={{
                textAlign: "center",
                color: "#bbb",
                marginBottom: "5em",
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
              marginBottom: "2em",
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
                        key={index}
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
                  })
              : users.map((user, index) => {
                  return (
                    <motion.div
                      initial={{ marginTop: 300 }}
                      animate={{ marginTop: 0 }}
                      exit={{ marginTop: 300 }}
                      transition={{ duration: 0.5 }}
                      key={index}
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
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "small",
                    }}
                  >
                    <SearchIcon />
                    Não encontrou o dev que procurava? Busque aqui!
                  </span>
                }
                style={{ minWidth: "30vw", margin: "1.5em" }}
              />
            </div>
          </motion.div>
        )}
      </div>
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

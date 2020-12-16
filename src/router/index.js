import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import UserPage from "../pages/userPage";
import Settings from "../pages/settingsEdit";
import UserList from "../pages/userList";
import SignUp from "../pages/signUp";
import Login from "../pages/login";
import { getUsersThunk } from "../store/modules/users/thunk";

const Router = () => {
  const key = useSelector((state) => state.key);
  const [pageCount, setPageCount] = useState(1);
  const [haveNext, setHaveNext] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(pageCount, haveNext, setHaveNext));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  return (
    <AnimatePresence>
      <Switch>
        {key ? (
          <>
            <Route exact path="/my-account">
              <Settings />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/user/:id">
              <UserPage />
            </Route>
            <Route exact path="/">
              <UserList
                pageCount={pageCount}
                setPageCount={setPageCount}
                haveNext={haveNext}
              />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/user/:id">
              <UserPage />
            </Route>
            <Route exact path="/">
              <UserList
                pageCount={pageCount}
                setPageCount={setPageCount}
                haveNext={haveNext}
              />
            </Route>
          </>
        )}
      </Switch>
    </AnimatePresence>
  );
};

export default Router;

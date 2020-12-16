import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import UserPage from "../pages/userPage";
import Settings from "../pages/settingsEdit";
import UserList from "../pages/userList";
import SignUp from "../pages/signUp";
import Login from "../pages/login";

const Router = () => {
  const key = useSelector((state) => state.key);
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
              <UserList />
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
              <UserList />
            </Route>
          </>
        )}
      </Switch>
    </AnimatePresence>
  );
};

export default Router;

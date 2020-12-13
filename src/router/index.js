import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Settings from "../pages/settingsEdit";
import UserList from "../pages/userList";
import UserPage from "../pages/userPage";

const Router = () => {
  const key = window.localStorage.getItem("token");
  return (
    <Switch>
      {key && (
        <Route exact path="/settings">
          <Settings />
        </Route>
      )}
      {!key && (
        <Route exact path="/login">
          <Login />
        </Route>
      )}
      {!key && (
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      )}
      <Route exact path="/user/:id">
        <UserPage />
      </Route>
      <Route exact path="/">
        <UserList />
      </Route>
    </Switch>
  );
};

export default Router;

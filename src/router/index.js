import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Settings from "../pages/settingsEdit";
import UserList from "../pages/userList";

const Router = () => {
  const key = window.localStorage.getItem("token");
  return key ? (
    <Switch>
      <Route exact path="/users-list">
        <UserList />
      </Route>
      <Route exact path="/user/:id"></Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
      <Route exact path="/users-list">
        <UserList />
      </Route>
      <Route exact path="/user/:id"></Route>
    </Switch>
  );
};

export default Router;

import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/login";
import SignUp from "../pages/signUp";

const Router = () => {
  const key = useSelector((state) => state.key.key);
  return key ? (
    <Switch>
      <Route exact path="/users-list"></Route>
      <Route exact path="/user/:id"></Route>
      <Route exact path="/settings"></Route>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/users-list"></Route>
      <Route exact path="/user/:id"></Route>
    </Switch>
  );
};

export default Router;

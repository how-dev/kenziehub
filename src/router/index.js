import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/login";

const Router = () => {
  const key = useSelector((state) => state.key);
  return key ? (
    <Switch>
      <Route exact path="/authenticated"></Route>
      <Route exact path="/users-list"></Route>
      <Route exact path="/:user"></Route>
      <Route exact path="/settings"></Route>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/sign-up"></Route>
      <Route exact path="/feed"></Route>
      <Route exact path="/users-list"></Route>
      <Route exact path="/:user"></Route>
    </Switch>
  );
};

export default Router;

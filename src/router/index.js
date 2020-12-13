import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Settings from "../pages/settingsEdit";
import UserList from "../pages/userList";
import UserPage from "../pages/userPage";

const Router = () => {
  const key = useSelector((state) => state.key.key);
  return (
    <Switch>
      {key ? (
        <Route exact path="/settings">
          <Settings />
        </Route>
      ) : (
        <>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
        </>
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

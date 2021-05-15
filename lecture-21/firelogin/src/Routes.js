
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

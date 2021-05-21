import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AuthGaurd from "./components/AuthGaurd";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <AuthGaurd>
          <Home />
        </AuthGaurd>
      </Route>
    </Switch>
  );
}

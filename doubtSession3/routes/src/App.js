import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Topics from './pages/Topics';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


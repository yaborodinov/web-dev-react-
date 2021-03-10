import './App.css';
import Header from "./Header.js"
import About from "./About"
import Users from "./Users"
import Main from "./Main"
import UserId from "./UserId"
import Error from "./Error"

import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Router>
        <nav>
          <li><NavLink to="/">Main</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route component={Error}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;

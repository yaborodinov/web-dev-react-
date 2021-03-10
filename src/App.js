import './App.css';
import Header from "./Header.js"
import About from "./About"
import Users from "./Users"
import Main from "./Main"

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Router>
        <nav>
          <li><Link to="/" >Main</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/users" component={ Users}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;

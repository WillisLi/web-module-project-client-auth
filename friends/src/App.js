import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <Router>
      <div className="friendsApp">
        <ul>
          <li>
            <Link to = "/login">Login</Link>
          </li>

          <li>
            <Link to="/friendform">Add Friend</Link>
          </li>

          <li>
            <Link to="/logout">Logout</Link>
          </li>

          <li>
            {localStorage.getItem("token") && 
              <div>
                <Link to="/protected">Friends</Link>
              </div>
            }
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path = "/friendform" component = {FriendForm} />
          <Route path = "/login" component = {LoginForm} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

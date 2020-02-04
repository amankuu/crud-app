import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch, Link, Route} from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <ul className="navbar-list">
              <li>
                <Link to="/" > List </Link>
              </li>
              <li>
                <Link to="/create"> Create </Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </div>

          <hr/>

          <div>
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path='/create'>
                <Create/>
              </Route>
              <Route path='/search'>
                <Search />
              </Route>
            </Switch>
          </div>
        </div>



      </Router>

    );
  }
}

export default App;

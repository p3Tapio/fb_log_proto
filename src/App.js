import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PrivateRoute from './Components/Auth/PrivateRoute'
import PublicRoute from './Components/Auth/PublicRoute'
import Home from './Components/Views/Home'
import FrontPage from './Components/Views/FrontPage'
import UserPage from './Components/Views/UserPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Link to='/'>Koti</Link>
        <Link to='/public'>Julkinen</Link>
        <Link to='/private'>Yksityinen</Link>
        <Switch>
          <Route exact path='/' component={Home} />
          <PublicRoute path='/public' component={FrontPage} />
          <PrivateRoute path='/private' component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

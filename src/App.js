import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Famous from './components/pages/Famous';
import List from './components/pages/List';
import Details from './components/pages/Details';
import Signup from './components/Login/Signup';
import MapRender from './components/Discover/Maps';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      { <Router>
        <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/famous' exact component={Famous} />
            <Route path='/list' exact component={List} />
            <Route path='/details/:id' exact component={Details} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/adventure' exact component={MapRender} />
            <Route path='/login' exact component={Login} />
          </Switch>
      </Router> }
    </>
  );
}

export default App;

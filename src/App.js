import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Famous from './components/pages/Famous';
import List from './components/pages/List';
import Details from './components/pages/Details';
import Login from './components/Login/script';
import Signup from './components/Login/Signup';

function App() {
  return (
    <>
      { <Router>
        <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/famous' exact component={Famous} />
            <Route path='/list' exact component={List} />
            <Route path='/services' exact component={Details} />
            <Route path='/signup' exact component={Signup} />
          </Switch>
      </Router> }
    </>
  );
}

export default App;

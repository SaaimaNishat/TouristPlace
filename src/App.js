import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      { <Router>
        <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
      </Router> }
    </>
  );
}

export default App;

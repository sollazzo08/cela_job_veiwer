import React from 'react';
import NavBar from './components/homePage/NavBar';
import JobViewWrapper from './components/jobs/JobViewerWrapper.js';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';

function App() {
  return (

  <div>
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/dashboard" exact component={Dashboard}/>
    <Route path="/dashboard/jobs" exact component={JobViewWrapper}/>
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;

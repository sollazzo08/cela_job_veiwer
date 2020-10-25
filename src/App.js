import React from 'react';
import JobViewWrapper from './components/JobViewer/JobViewerWrapper.js';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/style.scss';



function App() {
  return (

  <div>
    <BrowserRouter>
    <Switch>
    <Route path="/dashboard" exact component={Dashboard}/>
    <Route path="/dashboard/jobs" exact component={JobViewWrapper}/>
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;

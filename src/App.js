import React from 'react';
import NavBar from './components/NavBar';
import JobViewWrapper from './components/JobViewerWrapper.js';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (

  <div>
    <BrowserRouter>
    <Dashboard />
    </BrowserRouter>
  </div>
  );
}

export default App;

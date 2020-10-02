import React from 'react';
import NavBar from './components/NavBar';
import JobViewWrapper from './components/JobViewerWrapper';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
        {/* <NavBar />
        <JobViewWrapper />
        <LoginPage /> */}
        <Dashboard />
    </div>
  );
}

export default App;

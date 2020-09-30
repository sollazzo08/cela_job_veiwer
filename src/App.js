import React from 'react';
import NavBar from './components/NavBar';
import JobViewWrapper from './components/JobViewerWrapper';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>
        <NavBar />
        <JobViewWrapper />
        {/* <LoginPage /> */}
    </div>
  );
}

export default App;

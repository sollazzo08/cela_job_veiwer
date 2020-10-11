import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import JobModule from './DashModules/JobsModule';
import SchedulerModule from './DashModules/SchedulerModule';
import PlannerModule from './DashModules/PlannerModule';
import { BrowserRouter, Route } from 'react-router-dom';


import '../../styles/_dashboard.scss';

//Parent class for the dashboard components
function Dashboard() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="dashContainer">
      <Sidebar dropdown={dropdown} setDropdown={setDropdown} />
      <div className="dashboard">
        <div className="dashModulesContainer">
          <div className="column1">
            <JobModule /> 
            <JobModule />
          </div>
          <div className="column2">
            <SchedulerModule />
          </div>
          <div className="column3">
    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
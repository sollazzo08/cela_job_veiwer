import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import JobModule from './DashModules/JobsModule';
import SchedulerModule from './DashModules/SchedulerModule';
import PlannerModule from './DashModules/PlannerModule';
import { BrowserRouter, Route } from 'react-router-dom';
import JobViewWrapper from '../JobViewerWrapper';

import '../../styles/_dashboard.scss';

//Parent class for the dashboard components
function Dashboard() {
  const [dropdown, setDropdown] = useState(false);


  return (
    <div className="container">
      <Sidebar dropdown={dropdown} setDropdown={setDropdown} />
      <BrowserRouter>
        <div className="dashboard">
          <Route path="/jobs" exact component={JobViewWrapper} />
          {/* <div className="dashModulesContainer">
          <div className="column1">
          <JobModule />
          <JobModule />
          </div>
          <div className="column2">
          <SchedulerModule />
          </div>
          <div className="column2">

          </div>
        </div> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Dashboard;
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import JobModule from './DashModules/JobsModule';
import SchedulerModule from './DashModules/SchedulerModule';
import PlannerModule from './DashModules/PlannerModule';
import '../../styles/_dashboard.scss';

//Parent class for the dashboard components
function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard">
        <div className="dashModulesContainer">
          <div className="column1">
            <JobModule />
            <JobModule />
          </div>
          <div className="column2">
            <JobModule />
            <JobModule />
          </div>
          <div className="column2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import JobModule from "./Widgets/JobsModule";
import SchedulerModule from "./Widgets/SchedulerModule";
import NavBar from "./NavBar";
import "../../styles/_dashboard.scss";

//Parent class for the dashboard components
function Dashboard() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <div className="dashContainer ">
        <Sidebar dropdown={dropdown} setDropdown={setDropdown} />
        <div className="dashboard">
          <NavBar />
          <hr></hr>
          <div className="dashModulesContainer">
            <div className="column1">
              <JobModule />
              <JobModule />
            </div>
            <div className="column2">
              <SchedulerModule />
            </div>
            <div className="column3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

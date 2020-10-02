import React from 'react'
import '../../../styles/_sidebar.scss'
import faker from 'faker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faScroll, faBookReader, faCalendarAlt, faCalendar} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {

  return (
    <div className="sideContainer">
      <div className="userSection">
        <img alt="profile_picture" src={faker.image.avatar()} />
        <div className="username">John Doe</div>
        <FontAwesomeIcon  className="faAngleDown" icon={faAngleDown}/>
      </div>   
      <hr />
      <div className="lowerSidebar">
      <div className="menuSection">
          <button className="btn">
            <div class="icons">
              <FontAwesomeIcon  className="btnIcons"
                                icon={faScroll}
                                />
            </div>
            <span>Jobs</span>
          </button>
          <button className="btn">
          <div class="icons">
            <FontAwesomeIcon  className="btnIcons"
                              icon={faBookReader}
                              />
          </div>
          <span> Scheduler</span>
          </button>
          <button className="btn">
          <div class="icons">
            <FontAwesomeIcon  className="btnIcons"
                              icon={faCalendar}
                              />
          </div>
          <span>Planner</span>
          </button>
      </div>
      <div className="logo">
        CELA
      </div>
    </div>
    </div>
  )
}

export default Sidebar;
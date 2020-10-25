import React, {useState} from 'react'
import faker from 'faker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faScroll, faBookReader, faCalendarAlt, faCalendar} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import '../../../styles/_sidebar.scss'
import CelaLogo from '../../../images/CELA LOGO.png';

function Sidebar({dropdown, setDropdown }) {

  const [open,isOpen] = useState(false);
  const [click, isClicked] = useState(false);

  const ProfileDropdown = () => {
    return (
      <div className="dropdownContainer">
        <Link href="/">View Profile</Link>
        <hr></hr>
        <Link href="/">Sign Out</Link>
      </div>
    )
  }
  
  return (
    <div className="sideContainer">
      <div className="userSection">
        <img alt="profile_picture" src={faker.image.avatar()} />
        <div className="username">John Doe</div>
        <FontAwesomeIcon  
          className="faAngleDown" 
          icon={faAngleDown}
          onClick={() => isOpen(!open)}
          />
          {open ? <ProfileDropdown/> : null}
      </div>   
      <hr />
      <div className="lowerSidebar">
      <div className="menuSection">
          <Link className="btn" to="/dashboard">
            <div class="icons">
              <FontAwesomeIcon  className="btnIcons" icon={faScroll} />
            </div>
            <span>Dashboard</span>
          </Link>
          <Link className="btn" to="/dashboard/jobs">
            <div class="icons">
              <FontAwesomeIcon  className="btnIcons" icon={faBookReader} />
            </div>
            <span>Job Viewer</span>
          </Link>  
            <button className="btn">
            <div class="icons">
              <FontAwesomeIcon  className="btnIcons" icon={faBookReader} />
            </div>
            <span> Scheduler</span>
            </button>
          <button className="btn">
          <div class="icons">
            <FontAwesomeIcon  className="btnIcons" icon={faCalendar} />
          </div>
          <span>Planner</span>
          </button>
      </div>
      <div className="logo">
        <img src={CelaLogo} alt="cela logo" width="200" height="100" />
      </div>
    </div>
    </div>
  )
}

export default Sidebar;
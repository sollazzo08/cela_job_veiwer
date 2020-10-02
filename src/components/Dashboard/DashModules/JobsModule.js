import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import '../../../styles/_jobsModule.scss'

function JobsModule() {
  return (
    <div className="jobsContainer">
      <div className="header">
        <span>Jobs</span>
        <div className="addJobLink">
         <FontAwesomeIcon icon={faPlusCircle} /> 
         Add Job
        </div>
      </div>
      <hr></hr>
      <div className="preview">
        <h5>OCT 1, 2020 10:19PM</h5>
        <p>Minim mollit nulla non nulla Lorem esse enim minim proident 
            magna fugiat aute nisi in. Elit amet velit duis quis labore 
            ad culpa incididunt proident deserunt pariatur. Enim non ea 
            adipisicing Lorem.</p>
      </div> 
    </div>
  )
}

export default JobsModule;
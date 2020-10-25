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
         <FontAwesomeIcon className="faPlusCircle" icon={faPlusCircle} /> 
         Add Job
        </div>
      </div>
      <hr></hr>
      <div className="preview">
        <div className="info">
          <div className="numOfJobs">
              <span>56</span>
              <p>JOBS</p>
          </div>
          
        </div>
        <div className="jobPreview">
        <div className="date">OCT 1, 2020 10:19PM</div>
        <p>    
          Minim mollit nulla non nulla Lorem esse enim minim proident 
          magna fugiat aute nisi in. Elit amet velit duis quis labore 
        </p>      
        </div>
      </div> 
    </div>
  )
}

export default JobsModule;
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import '../../../styles/_scheduler.scss';

const SchedulerModule = () => {
    return(
      <div className="schedulerContainer">
      <div className="header">
        <span>Scheduler</span>
        <div className="addDateLink">
         <FontAwesomeIcon className="faPlusCircle" icon={faPlusCircle} /> 
        </div>
      </div>
      <hr></hr>
      <div className="preview">
        <div className="schedulePreview">
        <div className="date">Today 11:30AM</div>
        <p>    
          Minim mollit nulla non nulla Lorem esse enim minim proident 
          magna fugiat aute nisi in. Elit amet velit duis quis labore 
        </p>      
        </div>
      </div> 
      <div className="preview">
        <div className="schedulePreview">
        <div className="date">Tomorrow 8:30AM</div>
        <p>    
          Minim mollit nulla non nulla Lorem esse enim minim proident 
          magna fugiat aute nisi in. Elit amet velit duis quis labore 
        </p>      
        </div>
      </div> 
    </div>
    );
};

export default SchedulerModule;
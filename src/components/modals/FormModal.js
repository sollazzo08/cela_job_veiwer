import React from "react";
import JobForm from '../jobs/JobForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
//import '../../styles/_formModal.scss';



function FormModal(props) {

  const setIsOpened = props.setIsOpened
  console.log(props);
  return (
    <div className="modal_container">
    <div className="modal">
      <div className="window_close_icon">
        <FontAwesomeIcon 
          icon={faWindowClose}
          onClick={() => setIsOpened(false)}
        />
      </div>  
      <div className="header">
        <h2>Add Job Form</h2>
      </div>
      <JobForm jobs = {props.jobs} addJob = {props.addJob}/>
      <div className="footer">
      </div>
    </div>
  </div>
  )
}   




export default FormModal;
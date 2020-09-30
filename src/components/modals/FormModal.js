import React from "react";
import '../../styles/_formModal.scss';
import JobForm from '../JobForm';


function FormModal(props) {

  const setIsOpened = props.setIsOpened
  console.log(props);
  return (
    <div className="modal_container">
    <div onClick={() => setIsOpened(false)}>Close</div>
    <div className="modal">
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
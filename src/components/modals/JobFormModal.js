import React from "react";
import JobForm from '../JobViewer/JobForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
//import '../../styles/_formModal.scss';



function FormModal(props) {

  console.log(props);
  return (
    <div className="modal_container">
      <div className="modal jobFormModal">
        <JobForm jobs = {props.jobs} addJob = {props.addJob} setIsOpened={props.setIsOpened}/>
      </div>
    </div>
  )
}   

export default FormModal;
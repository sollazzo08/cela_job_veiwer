import React, { Component } from 'react';
import {Formik, Field, Form} from 'formik';
//import '../../styles/_jobform.scss';

class JobForm extends Component {

    constructor(props) {
      super(props);
     
      this.state = {
        job: "",
     
      }
    }
    
    render() {
      console.log(this.props);
      return (

    <Formik
      initialValues= {{
        jobName : "",
        jobType : [],
        customerName: "",
        jobNumber: "",
        file: "",
      }}
      onSubmit= {values => {
        let job = [values];
        this.props.addJob(job);
        this.setState({
          job: ""
  
        })

      }}
    > 
      <Form>  
        <div className="form_container">
        <div className="myForm">
          <div className="label">
            <label>Job Name:</label>
          </div>
          <Field className ="input" name="jobName" type="text"/>
        </div>
        <div className="myForm">
          <div className="label">
            <label>Job Type:</label>
          </div>
          <div className="checkbox">
          <Field name="jobType" type="checkbox" value="Roofing"/>Roofing
          <Field name="jobType" type="checkbox" value="Siding"/>Siding
          <Field name="jobType" type="checkbox" value="Windows"/>Windows
          <Field name="jobType" type="checkbox" value="Gutters"/>Gutters
          </div>
        </div>
        <div className="myForm">
          <div className="label">
            <label>Customer:</label>
          </div>
          <Field className ="input" name="customerName" type="text"/>
        </div>  
        <div className="myForm">
          <div className="label">
            <label>Job #:</label>
          </div>
          <Field className ="input" name="jobNumber" type="text"/>      
        </div>  
        <div className="myForm">
         <div className="label">
            <label>Job File:</label>
          </div>
          <Field name="file" type="file"/>
        </div>  
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>

  )
}
}

export default JobForm;
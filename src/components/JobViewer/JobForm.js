import React, { Component } from 'react';
import {Formik, Field, Form} from 'formik';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import HouseLogo from '../../images/HOUSE.png';
import '../../styles/_jobForm.scss';
import '../../styles/_logo.scss';

class JobForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        job: "",
      }
    }
    render(props) {
      console.log(this.props);
      return (
        <div className="job_form_container">
          <section className="left_panel">
            <div className="logo_job_form">CELA HOME IMPROVEMENT</div>
            <div>
              <img
                src={HouseLogo}
                alt="cela house"
                height="200px"
                width="200px"
              />
            </div>
          </section>
          <section className="right_panel">
            <div className="header">
              <div className="logo_job_form">Add Your Job</div>
            </div>
            <div>
            <hr></hr>
            <Formik
              initialValues={{
                jobType: [],
                customerName: "",
                jobNumber: "",
                file: "",
              }}
              onSubmit={(values) => {
                let job = [values];
                this.props.addJob(job);
                this.setState({
                  job: "",
                });
              }}
            >
              <Form>
                <div className="form_container">
                  <div className="jobFormInput">
                    <div className="label">
                      <label>Job Number</label>
                    </div>
                    <Field className="input" name="jobNumber" type="text" placeholder="Job #" />
                  </div>
                  <div className="jobFormInput">
                    <div className="label">
                      <label>Customer Name</label>
                    </div>
                    <Field className="input" name="customerName" type="text" placeholder="Name" />
                  </div>
                  <div className="checkbox_input">
                    <div className="label">
                      <label>Job Type</label>
                    </div>
                      <div class="checkbox_1">
                        <Field name="jobType" type="checkbox" value="Roofing" />
                        Roofing
                        <Field name="jobType" type="checkbox" value="Siding" />
                        Siding
                      </div>
                      <div class="checkbox_2">
                        <Field name="jobType" type="checkbox" value="Windows" />
                        Windows
                        <Field name="jobType" type="checkbox" value="Gutters" />
                        Gutters
                      </div>
                  </div>
                  <div className="file_input_container">
                    <div className="label">
                      <label>Job File</label>
                    </div>
                      <label className="" htmlFor="fileInput">Upload Picture</label>
                      <Field className="file_input" name="file" type="file" id="fileInput"  />
                    
                  </div>
                </div>
                <hr></hr>
              <div className="btn_container">
                <button className="cancel_btn"onClick={() => this.props.setIsOpened(false)}>Cancel</button>
                <button className="submit_btn"type="submit">Add Job</button>
              </div>
              </Form>
            </Formik>
            </div>
          </section>
        </div>
      );
}
}

export default JobForm;
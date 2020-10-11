import React, { Component } from 'react'
import FilterSection from './FilterSection';
import JobList from './JobList'
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import '../../styles/_jobViewer.scss';

class JobViewerWrapper extends Component {

  constructor(props){
    super(props);
    this.state = {
      jobs: []
  
    }
    this.addJob = this.addJob.bind(this);
  }

  addJob(job){
    console.log(job);
    this.setState({
      jobs: [...this.state.jobs, job]
    })
  }

  render() {
    console.log(this.state.jobs);
    return (
      <div className="jobViewerContainer">
        <Sidebar />
        <div className="jobViewSection">
        <FilterSection jobs = {this.state.jobs} addJob ={this.addJob}/>
        <hr></hr>
        <div className="job_table">
          <JobList jobs={this.state.jobs}/>
        </div>
        </div>
      </div>
    )
  }
}

export default JobViewerWrapper;
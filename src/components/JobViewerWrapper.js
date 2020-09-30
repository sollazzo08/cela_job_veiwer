import React, { Component } from 'react'
import FilterSection from './FilterSection';
import JobList from './JobList'
import '../styles/_table.scss';

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
      <div>
        <FilterSection jobs = {this.state.jobs} addJob ={this.addJob}/>
        <div className="job_table">
          <JobList jobs={this.state.jobs}/>
        </div>

      </div>
    )
  }
}

export default JobViewerWrapper;
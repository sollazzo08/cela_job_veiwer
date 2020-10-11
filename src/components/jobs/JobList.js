import React, { Component } from 'react'
import Job from './Job';
import '../../styles/_jobViewer.scss';


function JobList(props){
  console.log(props);
    return (
<React.Fragment>
  <table>
    <tr>
      <th>Job Name</th>
      <th>Job Type</th>
      <th>Customer</th>
      <th>Job #</th>
    </tr> 
    {props.jobs.map((job, index) => (
    <Job  key={job} job={job}/>
  ))}
  </table>
  <a href="">View</a>

</React.Fragment>
    )
  
}

export default JobList;
import React from 'react'
import '../styles/_table.scss';


function Job(props) {
 
  return (
    


  <tr>
    <td>{props.job[0].jobName}</td>
    <td>{props.job[0].jobType}</td>
    <td>{props.job[0].customerName}</td>
    <td>{props.job[0].jobNumber}</td>
  </tr>





  )
}

export default Job;
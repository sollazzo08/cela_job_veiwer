import React from 'react'
import '../../styles/_jobViewer.scss';


function Job(props) {
 
  return (
  <tr>
    <td>{props.job[0].jobNumber}</td>
    <td>{props.job[0].jobName}</td>
    <td>{props.job[0].jobType}</td>
    <td>{props.job[0].customerName}</td>
  </tr>
  )
}

export default Job;
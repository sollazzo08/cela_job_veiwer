import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Job from './Job';
import '../../styles/_table.scss';


function JobList(props){
  console.log(props);
    return (
<React.Fragment>

    <table className="content_table">
      <thead>
        <tr>
          <th>Job #</th>
          <th>Job Name</th>
          <th>Job Type</th>
          <th>Customer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {/* {props.jobs.map((job, index) => (
        <Job  key={job} job={job}/>
      ))} */}
        <tr>
          <td>2020-1</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr className="active_row">
          <td>2020-2</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr>
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr className="active_row">
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr>
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr className="active_row">
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr>
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr className="active_row">
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr>
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
        <tr className="active_row">
          <td>2020-3</td>
          <td>Goshen</td>
          <td>Roofing</td>
          <td>John</td>
          <td><Link>View</Link></td>
        </tr>
      </tbody>
    </table>

</React.Fragment>
    )
  
}

export default JobList;
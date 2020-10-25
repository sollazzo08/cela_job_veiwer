import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import Job from './Job';
import '../../styles/_jobTable.scss';


function JobList(props){
  console.log(props);
    return (
<React.Fragment>

    <table className="content_table">
      <thead>
        <tr>
          <th>Job #</th>
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
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>2020-1</td>
          <td>Roofing</td>
          <td>John</td>
          <td id="icon">
            <div class="edit_icon">
              <FontAwesomeIcon icon={faEdit}/>
            </div>
            <div class="view_link">
              <Link>View</Link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

</React.Fragment>
    )
  
}

export default JobList;
import React, { Component } from 'react'
import '../styles/style.css';
import {Link} from 'react-dom';

class NavBar extends Component {

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="logo">Cela Job Viewer</div>
          <a className="login" href="#">Login</a>
      </nav>
      </div>
    )
  }
}

export default NavBar;
import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import SignInModal from '../modals/SignInModal';
import '../../styles/_navbar.scss';

function NavBar() {

  const [open, isOpen] = useState(false);
    
    return (
      <div>
        <nav className="navbar">
          <div className="logo">Cela Home Improvements</div>
          <div className="navLinks">
            <Link 
              className="signin" 
              href="#"
              onClick={() => isOpen(!open)}>Sign In
            </Link>
            {open && <SignInModal isOpen={isOpen}/>}
            <Link  to="/dashboard" className="login" href="#">Dashboard</Link>
          </div>
      </nav>
      </div>
    )
  
}

export default NavBar;
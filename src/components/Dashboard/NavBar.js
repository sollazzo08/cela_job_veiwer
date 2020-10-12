import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SignInModal from '../modals/SignInModal';
import '../../styles/_navbar.scss';

function NavBar() {

  const [open, isOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">CELA HOME IMPROVEMENTS</div>
        <div className="navLinks">
          <Link
            className="signin"
            href="#"
            onClick={() => isOpen(!open)}>Sign In
            </Link>
          {open && <SignInModal isOpen={isOpen} />}
        </div>
      </nav>
    </div>
  )

}

export default NavBar;
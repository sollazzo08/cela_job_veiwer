import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../../styles/_modal.scss';
import '../../styles/_logo.scss';
import '../../styles/_signIn.scss';
import { isDOMComponent } from 'react-dom/test-utils';

function SignInModal(props) {
  console.log(props);
  return (

    <div className="modal_container">
      <div className="modal">
          <div className="signIn_content">
            <div className="window_close_icon">
              <FontAwesomeIcon 
                icon={faWindowClose}
                onClick={() => props.isOpen(false)}
              />
            </div>
            <div className="logo_signin">CELA</div>
            <div className="welcome">Welcome Back!</div>
            <div className="email">
              <label>Email</label>
              <input  />
            </div>
            <div className="password">
              <div className="password_label">
                <label>Password</label>
                <a className="forgot_pass" href="/#">Forgot your password?</a>  
              </div>
              <input />
            </div>
            <div className="checkbox">
             <input type="checkbox"/> <label>Remember this device</label>
            </div>
            <button className="signIn_btn">Sign In</button>
          </div>
      </div>
    </div>
  )
}

export default SignInModal;
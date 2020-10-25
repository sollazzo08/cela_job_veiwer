import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../../styles/_modal.scss';
import '../../styles/_logo.scss';
import '../../styles/_signInForm.scss';



function SignInModal(props) {
  
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');


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
              <input  value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
              <div className="password_label">
                <label>Password</label>
                <a className="forgot_pass" href="/#">Forgot your password?</a>  
              </div>
              <input value={password} onChange={(e) => setPassword(e.target.value)}/>
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
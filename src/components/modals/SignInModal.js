import React from 'react'
import '../../styles/_modal.scss';
import '../../styles/_logo.scss';
import '../../styles/_signIn.scss';

function SignInModal(props) {
  console.log(props);
  return (

    <div className="modalContainer">
      <div className="modal">
          <div className="signIn_content">
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
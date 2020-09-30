import React, { Component } from 'react'
import '../styles/_loginPage.scss';

class LoginPage extends Component {

  handleSignIn = (e) => {
    e.preventDefault();
    console.log('test1');

      
  };
  handleSignUp = (e) => {
    e.preventDefault();   
    console.log('test2');
      
  };

  render() {

    return (
      <div className="LoginContainer">
        <div className="LoginBox">
          <div className="triangle">
          </div>
          <div className="LoginContent">
            <div className="CelaTitle">Cela Home Improvements Job Viewer</div>
            <div className="Buttons">
              <button className="Btn" onClick={this.handleSignIn} onSubmit={this.handleSignIn}><span>Sign In</span></button>
              <button className="Btn" onClick={this.handleSignUp} onSubmit={this.handleSignUp}><span>Sign Up</span></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;
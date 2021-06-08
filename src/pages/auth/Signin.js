import React from 'react';
import AuthImage from '../../assets/images/auth.png';
import Logo from '../../assets/images/logo.png';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={AuthImage} alt="auth" />
      </div>
      <div className="second-section">
        <div className="signup-header">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <h4>Login</h4>
        </div>
        <div className="signup-input">
          <input placeholder="Password" value="Username" />
          <input placeholder="Confirm Password" value="Confirm Password" />
          <button>Signup</button>
          <div className="bottom-text">
            <h6>
              Don't have an account?<a href="/register">here</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

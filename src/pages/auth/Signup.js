import React from 'react';
import AuthImage from '../../assets/images/auth.png';
import Logo from '../../assets/images/logo.png';
import {Formik} from 'formik';
import './_auth.scss';

const Signup = () => {

  const handleSubmit = () =>{}
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
          <h4>Create Account</h4>
        </div>
        <Formik initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }}
        onSubmit={handleSubmit}>
          <div className="signup-input">
            <input placeholder="First name" value="firstName" />
            <input placeholder="Last name" value="lastName" />
            <input placeholder="Email" value="email" />
            <input placeholder="Password" value="Password" />
            <input placeholder="Confirm Password" value="Confirm Password" />
            <button>Signup</button>
            <div className="bottom-text">
              <h6>
                Already have account?<a href="/login">Login</a>
              </h6>
            </div>
          </div>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;

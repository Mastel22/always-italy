import React from 'react';
import InputForm from '../templates/InputForm';
import signupFields from '../../lib/signupFields';

const Register = () => {
  return (
    <div className="signup">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create your Account</h1>
          <h6>You can signup with your Google account or email</h6>
          <div className='social'>
            <input name='name' type='' placeholder='GOOGLE' />
          </div>
          <div className="orLoginDiv">
            <span className="orSpan">
              <p>or</p>
            </span>
          </div>
        </div>
        <div>
          {signupFields.map(
            ({
              id,
              name,
              type,
              validationKey,
              placeholder,
              dataTestKey,
              isRequired,
            }) => (
              <InputForm
                key={id}
                data-test={dataTestKey}
                // value={state[name]}
                name={name}
                type={type}
                classNames="form-control"
                // onChange={event => this.handleChange(event)}
                // error={validation[validationKey].error}
                // pattern={validation[validationKey].pattern}
                placeholder={placeholder}
                required={isRequired}
              />
            )
          )}
        </div>
        <div className='d-flex justify-content-center'  >
          <button type="button" class="btn btn-primary btn" >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

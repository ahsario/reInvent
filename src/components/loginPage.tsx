import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogIn from './logIn';
import { RegBtn } from './header';
import { styled } from 'linaria/react';

export const Btn = styled.div`
  display: block;
  width: 100%;
  margin: 20px auto;
  height: 40px;
  line-height: 40px;
  border: solid 2px rgba(255, 255, 255, 0.4);
  resize: none;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: #B2B2B2;
  text-align: center;
`;

export const errorText = <label className="error-text">Invalid Email Address</label>;

const LogInPage: React.FC = () => {
  let [emailValue, setEmailValue] = useState("");
  let [passwordValue, setPasswordValue] = useState("");
  let [isEmailValid, setIsEmailValid] = useState(false);

  const onEmailChange = (e) => {
    let val = e.target.value;
    setEmailValue(val);
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;;
    if ( reg.test(val) == true ) {
      setIsEmailValid(() => true);
      console.log(isEmailValid);
    } else {
      setIsEmailValid(() => false);
      console.log(emailValue);
      console.log(isEmailValid);
    }
  }

  const onPsswordChange = (e) => {
    let val = e.target.value;
    setPasswordValue(val);
  }

  return (
    <LogIn text="Sign In">
      <form>
        <label>Email</label>
        <input 
          className={(isEmailValid || (emailValue == "")) ? "" : "error-input"}
          onChange={onEmailChange} 
          type="email"
        />
        {(isEmailValid || (emailValue == "")) ? null : errorText}
        <label >Password</label>
        <input 
          type="passward"
          onChange={onPsswordChange}
          />
        <p className="small-text">
          By signing in, you agree to the 
          <a href="https://aws.amazon.com/ru/events/terms/"> AWS Event Terms and Conditions </a> 
          and the 
          <a href="https://aws.amazon.com/ru/codeofconduct/"> AWS Code of Conduct.</a>
        </p>
        {(isEmailValid && (passwordValue !== "")) ? RegBtn('Sign In', '100%') : <Btn>Sign In</Btn>}
        <div className="btns-wrap">
          <NavLink to="/registration">
            <div className="to-registration">Register</div>
          </NavLink>
          <pre> | </pre>
          <NavLink to="/reset">
            <div className="to-registration">Forgot Password</div>
          </NavLink>
          
        </div>
      </form>
    </LogIn>
  );
}
export default LogInPage;
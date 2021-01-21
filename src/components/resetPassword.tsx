import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogIn from './logIn';
import { RegBtn } from './header';
import { Btn, errorText } from './loginPage';


const ResetPasswordPage: React.FC = () => {
  let [emailValue, setEmailValue] = useState("");
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
  
  return (
    <LogIn text="Forgot Password">
      <p className="text">Don’t worry, it happens to the best of us. Fill in your e-mail below, so we can make sure its you, and we will also send instructions on how to reset your password.</p>
      <form>
        <label >Email</label>
        <input 
          className={(isEmailValid || (emailValue == "")) ? "" : "error-input"}
          onChange={onEmailChange} 
          type="email"
        />
        {(isEmailValid || (emailValue == "")) ? null : errorText}
        {isEmailValid  ? RegBtn('Sign In', '100%') : <Btn>Sign In</Btn>}
        <NavLink to="/login">
          <div className="btns-wrap">
            <div className="to-registration">Cancel</div> 
          </div>
        </NavLink>
      </form>
  </LogIn>
  );
}


export default ResetPasswordPage;
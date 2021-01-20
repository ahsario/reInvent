import React from 'react';
import { NavLink } from 'react-router-dom';
import LogIn from './logIn';
import { RegBtn } from './header';

const LogInPage: React.FC = () => (
  <LogIn text="Sign In">
    <form>
      <label >Email</label>
      <input type="email"></input>
      <label >Password</label>
      <input type="passward"></input>
      <p className="small-text">
        By signing in, you agree to the 
        <a href="https://aws.amazon.com/ru/events/terms/"> AWS Event Terms and Conditions </a> 
        and the 
        <a href="https://aws.amazon.com/ru/codeofconduct/"> AWS Code of Conduct.</a>
      </p>
      {RegBtn('Sign In', '100%')}
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

export default LogInPage;
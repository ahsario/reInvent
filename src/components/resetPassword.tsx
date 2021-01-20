import React from 'react';
import { NavLink } from 'react-router-dom';
import LogIn from './logIn';
import { RegBtn } from './header';


const ResetPasswordPage: React.FC = () => (
  <LogIn text="Forgot Password">
    <p className="text">Don’t worry, it happens to the best of us. Fill in your e-mail below, so we can make sure its you, and we will also send instructions on how to reset your password.</p>
    <form>
      <label >Email</label>
      <input type="email"></input>
      {RegBtn('Send', '100%')}
      <NavLink to="/login">
        <div className="btns-wrap">
          <div className="to-registration">Cancel</div> 
        </div>
      </NavLink>
    </form>
</LogIn>
);

export default ResetPasswordPage;
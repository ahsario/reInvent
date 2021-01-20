import React, { useState } from 'react';
import RegPage from './regPage';
import MainPage from './mainPage';
import LogInPage from './loginPage';
import ResetPasswordPage from './resetPassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export const myContext = React.createContext<Partial<boolean>>(false);

const App: React.FC = () => {
  const [popUpState, changePopUpState] = useState(false);
  const contextPopUpState = {popUpState, changePopUpState};

  return(
      <myContext.Provider value={contextPopUpState}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/registration" component={RegPage} />
            <Route path="/login" component={LogInPage} />
            <Route path="/reset" component={ResetPasswordPage} />
          </Switch>
        </Router>
      </myContext.Provider>
  );
}
export default App;

import React, { useState } from 'react';
import RegPage from './regPage';
import MainPage from './mainPage';
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
          </Switch>
        </Router>
      </myContext.Provider>
  );
}
export default App;

import React from 'react';
import CheckOut from './checkOut';
import FirstCP from './firstContentPart';
import Header from './header';
import LastCP from './lastContentPart';
import SecondCP from './secondContentPart';
import ThirdCP from './thirdContentPart';



const App: React.FC = () => (
  <div>
    <Header/>
    <FirstCP/>
    <SecondCP/>
    <ThirdCP/>
    <LastCP/>
    <CheckOut/>
  </div>
);

export default App;

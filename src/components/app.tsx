import React from 'react';
import CheckOut from './checkOut';
import FirstCP from './firstContentPart';
import Header from './header';
import LastCP from './lastContentPart';
import SecondCP from './secondContentPart';
import ThirdCP from './thirdContentPart';
import Footer from './footer';


const App: React.FC = () => (
  <div>
    <Header/>
    <FirstCP/>
    <SecondCP/>
    <ThirdCP/>
    <LastCP/>
    <CheckOut/>
    <Footer/>
  </div>
);

export default App;

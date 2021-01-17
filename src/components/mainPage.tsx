import React from 'react';
import CheckOut from './checkOut';
import FirstCP from './firstContentPart';
import Header from './header';
import LastCP from './lastContentPart';
import SecondCP from './secondContentPart';
import ThirdCP from './thirdContentPart';
import Footer from './footer';
import PopUp from './popup';

const MainPage: React.FC = () => (
  <>
    <Header/>
    <FirstCP/>
    <SecondCP/>
    <ThirdCP/>
    <LastCP/>
    <CheckOut/>
    <Footer/>
    <PopUp/>
  </>
);

export default MainPage;
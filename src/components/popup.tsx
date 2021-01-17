import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { LinkBtn } from './header';
import { CheckBtn } from './checkOut';
import { myContext } from './app'

const PopUpWrap = styled.div`
  display: ${(props: any) => props.display};
  flex-wrap: wrap;
  padding: 60px;
  padding-top: 130px;
  position: fixed;
  top: 0;
  z-index: 5;
  width:100%;
  height: 100%;
  overflow: scroll;
  background-color: #000;
  opacity: 0.9;
  color: white;
  font-size: 1.2rem;
  :before{
    box-shadow: inset 0 0 2000px rgba(243, 237, 237, 0.5);
    filter: blur(10px);
  }
  .hiden{
    display: none
  }
  .popup-nav {
    display: flex;
    height: fit-content;
    flex-grow: 3;
    .column {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 50px;
      margin-right: 50px;
      border-right: 1px solid #161616;
    }
    .last-column {
      flex-grow: 3;
      border: none;
    }
  }
  p {
    opacity: 0.7;  
  }
  a {
    padding-top: 15px;
    font-size: 1.2rem;
    opacity: .7;
  }
  .browseFAQ {
    flex-grow: 1;
    flex-basis: 50px;
    max-width: 400px;
    padding-right: 100px;
    h2 {
      margin-bottom: 50px;
      font-size: 2rem;
      line-height: 1em;
      font-weight: 400;
      width: 300px;
    }
    
  }
  
`;

const BrowseBtn = styled(CheckBtn)`
  margin-top: 20px;
  color: white;
  :hover {
    color: black;
  }
`;

const PopUp: React.FC = () => {
  const Hide = useContext(myContext);

  return (
    <PopUpWrap
      display={Hide.popUpState ? 'flex' : 'none'} >
      <div className="browseFAQ">
        <h2>Got a <strong>question?</strong></h2>
        <p>Check out our FAQ page for useful information and answers to your questions.</p>
        <BrowseBtn>Browse FAQ</BrowseBtn>
      </div>
      <div className="popup-nav">
        <div className="column">
          {LinkBtn('Agenda')}
          {LinkBtn('Keynotes')}
          {LinkBtn('Leadership Sessions')}
          {LinkBtn('Learn')}
          <a href="/learn/deepracer/?trk=direct" title="AWS DeepRacer">AWS DeepRacer</a>     
          <a href="/learn/tracks/?trk=direct" title="Tracks">Tracks</a>
          <a href="/learn/training-and-certification/?trk=direct" title="Training and Certification">Training and Certification</a>
        </div>
        <div className="column">
          {LinkBtn('Play')}
          {LinkBtn('Give Back')}
          {LinkBtn('Communities')}
          <a href="/communities/builders-fair/?trk=direct" title="Builders’ Fair">Builders’ Fair</a>
          <a href="/communities/developers/?trk=direct" title="Developers">Developers</a>
          <a href="/communities/getting-started/?trk=direct" title="Getting Started">Getting Started</a>
          <a href="/communities/startups/?trk=direct" title="Startups">Startups</a>
          <a href="/communities/we-power-tech/?trk=direct" title="We Power Tech">We Power Tech</a>
        </div>
        <div className="column last-column">
          {LinkBtn('Global Partner Summit')}
          {LinkBtn('AWS Hero Guides')}
          {LinkBtn('Sponsors')}
          <a href="/sponsors/featured-sessions/?trk=direct" title="Featured Sessions">Featured Sessions</a>
          {LinkBtn('FAQ')}
        </div>
      </div>
    </PopUpWrap>
  );
}
export default PopUp;
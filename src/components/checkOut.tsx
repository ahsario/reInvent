import React from 'react';
import { styled } from 'linaria/react';

const CheckWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  padding: 100px;
  color: white;
  background-color: #161616;
  h2 {
    font-size: 3rem;
    line-height: 1em;
    font-weight: 400;
    width: 300px;
  }
  .checkContent {
    font-size: 1.5rem;
    margin-left: 250px;
    width: 500px;
  }
  .play-btn {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 100px;
    width: fit-content;
    height: 50px;
    border: 3px solid white;
    border-radius: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    line-height: 50px;
    cursor: pointer;
    transition: all 0.1s linear 0.1s;
    :hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

const CheckOut: React.FC = () => (
  <CheckWrap>
    <h2>Check out the <strong>AWS Hero Guides</strong></h2>
    <div className="checkContent">
      <p>
        Find inspiration from AWS Heroes who have authored guides to help you build agendas based on specific areas of interest.
      </p>
      <a href="https://virtual.awsevents.com/user/login?ref=%2Fchannel%2FAWS%2BHero%2BGuides%2F188376503%3Fnc2%3Dreinv20_m_clahg%26trk%3Ddirect">
        <div className="play-btn">View Playlist</div>
      </a>
    </div>
  </CheckWrap>
);

export default CheckOut;
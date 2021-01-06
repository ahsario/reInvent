import React from 'react';
import { styled } from 'linaria/react';
import { SliderItem } from './slide';
import {Content} from './secondContentPart';

const LastCPWrap = styled.div`
  display: flex;
  color: white;
  .picture {
    position: relative;
    width: 65%;
    height: 400px;
    background-image: url("../../../src/image/lastPartImg.jpg");
    background-size: cover;
  }
  
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    vertical-align: middle;
    line-height: 7.5rem;
    transform: translate(-50%,-50%);
    width: 7.5rem;
    height: 7.5rem;
    border: .2rem solid;
    border-radius: 50%;
    transition: all .2s ease-out;
    :hover {
      background-color: #fff;
      color: black;
      height: 9rem;
      width: 9rem;
      line-height: 9rem;
      border: none;
    }
  }
   

`;

const LastCP: React.FC = () => (
  <LastCPWrap>
    <div className="picture">
      <div className="play-button " >
        <span >&#x25B6;</span>
      </div>
    </div>
    <Content >
      <h4>AWS NEWS DESK</h4>
      <div className="title"><div className="bold">All the news</div>from re:Invent 2020</div>
      <div className="sliderItemText">Join your host Rudy Chetty for all the big headlines and news from re:Invent 2020.</div>
      <div className="sliderItemButtonWrap">
        <div className="sliderItemButton">Watch More</div>
      </div>
    </Content>
  </LastCPWrap>
);

export default LastCP;
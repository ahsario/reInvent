import React from 'react';
import { styled } from 'linaria/react';
import { SliderItem } from './slide';

const SecondCPWrap = styled.div`
  display: flex;
  margin-top: 50px;
  color: white;
  img {
    width: 65%;
  }
`;
export const Content = styled(SliderItem)`
  width: 35%;
  padding: 80px 130px 30px 50px;
  box-sizing: border-box;
  h4 {
      font-size: 12px;
      line-height: 3rem;
      letter-spacing: .2rem;
      font-weight: 700;
      color: magenta;
    }
  .title {
    font-size: 2.7rem;
    line-height: 2.7rem;
    letter-spacing: -.15rem;
  }
  .bold {
    font-weight: 900;
  }
  .sliderItemButton{
    background-color: #000;
  }
`;

const SecondCP: React.FC = () => (
  <SecondCPWrap>
    <img src="../../../src/image/secondPartImage.jpg" alt='asiatka' />
    <Content>
      <h4>LEADERSHIP SESSIONS</h4>
      <div className="title">Dive deep with <div className="bold">AWS leaders</div></div>
      <div className="sliderItemText">Hear directly from AWS leaders as they share the latest advances in AWS technologies, set the future product direction, and motivate you through compelling success stories.</div>
      <div className="sliderItemButtonWrap">
        <div className="sliderItemButton">Learn More</div>
      </div>
    </Content>
  </SecondCPWrap>
);

export default SecondCP;
import React from 'react';
import { styled } from 'linaria/react';
import { FooterEnd } from './regPage';

const LogInPageWrap = styled.div`
  z-index: 1;
  max-width: 480px;
  margin: 100px auto;
  padding: 48px 80px 80px;
  border: 1px solid #5a5a5a;
  background-color: black;
  .logo {
    display: block;
    max-width: 250px;
    text-align: center;
    margin: 24px auto;
  }
  .form-heading1 {
    text-align: center;
    font-weight: 300;
    font-size: 24px;
    color: #fff;
  }
  label {
    margin-top: 30px;
  }
  input {
    display: block;
    width: 100%;
    margin: 20px auto;
    padding: 10px 16px;
    font-size: 14px;
    font-family: Amazon Ember Medium;
    line-height: 17px;
    border: solid 2px rgba(255, 255, 255, 0.4);
    resize: none;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    color: #B2B2B2;
    :focus {
      outline: none;
      border: solid 3px rgba(255, 255, 255, 1);
    }
  }
  .small-text {
    margin: 30px 0;
    text-align: center;
    font-size: 13px;
    color: #b9b0b0;
    a {
      color: white;
      font-weight: 900;
    }
  }
  .text {
    margin: 30px 0;
    text-align: center;
  }
  .btns-wrap {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    line-height: 14px;
    .to-registration {
      font-weight: 900;
      :hover {
        color: #b9b0b0;
      }
    }
  }
`;
const Video = styled.div`
  position: absolute;
  z-index: -1;
  width: 70%;
  top: 0;
  right: 0;
  video {
    object-position: top right;
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;


const LogIn: React.FC = (props) => (
  <>
    <LogInPageWrap>
      <img className="logo" src="../../../src/image/bigLogo.png" alt="logo"/>
      <div className="form-heading1">{props.text}</div>
      {props.children}
    </LogInPageWrap>
    <Video>
      <video  muted loop autoPlay>
        <source src="../../../src/image/ripple-video.mp4"></source>
      </video>
    </Video>
    {FooterEnd()}
  </>
);

export default LogIn;
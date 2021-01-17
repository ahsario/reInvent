import React from 'react';
import { styled } from 'linaria/react';

const FooterWrap = styled.div`
  margin: 50px 100px 0 200px;
  color: white;
  .footer-middle {
    display: flex;
    margin-top: 100px;
    border-bottom: 1px solid #161616;

    .footer-middle-left {
      width: 50%;
      padding-right: 90px;
      border-right: 1px solid #161616;
      box-sizing: border-box;
      h3 {
        
        font-size: 2.2rem;
        line-height: 1.25;
        font-weight: 200;
        letter-spacing: -.02rem;
      }
      
      form {
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        input {
          width: 100%;
          height: 60px;
          border-radius: 50px;
          box-sizing: border-box;
          font-size: 18px;
          padding-left: 30px;
        }
        .submit {
          position: absolute;
          right: 10px;
          top: 5px;
          width: 50px;
          height: 50px;
          padding-bottom: 5px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(90deg,magenta,orange);
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
        }
      }
      a {
        text-decoration: none;
        color: #b9b0b0;
        font-size: 1.1rem;
        line-height: 1.5;
        letter-spacing: -.02px;
        font-weight: 400;
        
      }
      .text {
        color: #b9b0b0;
        margin-top: 60px;
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -.02px;
        font-weight: 600;
      }
      ul {
        display: flex;
        list-style: none;
        padding-top: 20px;
        padding-bottom: 20px;
        li {
          padding-right: 15px;
        }
      }
    } 
    .footer-middle-right {
      margin-left: 100px;
      ul {
        
        list-style: none;
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -.02px;
        font-weight: 600;
        li {
          margin-bottom: 20px;
          a {
            color: #b9b0b0;
            transition: opacity .25s;
            :hover {
              opacity: .7;
            }
          }
        }
      }
    } 
  }
  .small-text {
    padding-top: 20px;
    padding-bottom: 20px;
    color: #b9b0b0;
    font-size: 13px;
    a {
      cursor: pointer;
      color: #b9b0b0;
      :hover {
        color: #d617f0;
      }
    }
  }
`;

const Footer: React.FC = () => (
  <FooterWrap>
    <img src="../../../src/image/bigLogo.png" alt="logo"/>
    <div className="footer-middle">
      <div className="footer-middle-left">
        <h3>Stay up to date with everything re:Invent</h3>
        <form>
          <input type="email" placeholder="Enter email address"></input>
          <button className="submit">&#8594;</button>
        </form>
        <a href="https://aws.amazon.com/ru/privacy/?trk=direct">You may unsubscribe at any time. We handle your information in accordance with the AWS Privacy Notice.</a>
        <p className="text">Join the AWS Cloud community</p>
        <ul>
          <li><a href="twitter.com"><img src="../../../src/image/twit.png" alt="twitter"/></a></li>
          <li><a href="facebook.com"><img src="../../../src/image/fb.png" alt="facebook"/></a></li>
          <li><a href="https://www.linkedin.com/"><img src="../../../src/image/inst.png" alt="in"/></a></li>
          <li><a href="youtube.com"><img src="../../../src/image/ytb.png" alt="youtube"/></a></li>
          <li><a href="instagram.com"><img src="../../../src/image/intg.png" alt="instagram"/></a></li>
          <li><a href="mail.ru"><img src="../../../src/image/mail.png" alt="mail"/></a></li>
        </ul>
      </div>
      <div className="footer-middle-right">
        <ul>
          <li><a href="https://2020awsreinvent.s3-us-west-2.amazonaws.com/2020+reinvent+prospectus?trk=direct">Sponsorship<br/> Opportunities</a></li>
          <li><a href="https://aws.amazon.com/ru/codeofconduct/">Code of Conduct</a></li>
          <li><a href="https://aws.amazon.com/ru/events/terms/?trk=direct">Terms and Conditions</a></li>
        </ul>
      </div>
    </div>
    <p className="small-text">
      <a href="https://aws.amazon.com/ru/privacy/?trk=direct">Privacy •</a>
      <a href="https://aws.amazon.com/ru/terms/?trk=direct"> Site Terms •</a>
      <a href="https://aws.amazon.com/ru/terms/?trk=direct"> Cookie Preferences • </a>
      © 2020, Amazon Web Services, Inc. or its affiliates. All rights reserved.
    </p>
  </FooterWrap>

);

export default Footer;
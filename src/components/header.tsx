import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { styled } from 'linaria/react';
import * as actions from '../actions';
import Slider from './slider';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  
  `;

const Hamburger = styled.div`
  position: fixed;
  z-index: 3;
  left: 20px;
  top: 20px;
  width: 60px;
  height: 30px;
  background: url('../../../src/image/gamb.svg') no-repeat ;
  background-size: contain;
`;

const NavBar = styled.div`
  
  position:fixed;
  padding-left: 100px;
  padding-right: 100px;
  top: ${(props: any) => props.top};
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  height: 70px;
  background:rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid grey;
  transition: top 0.25s linear 0.25s;
  a {
    cursor: pointer;
  }
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: ${(props: any) => props.top};
  transition: top 0.25s linear 0.35s;
`;

const BtnsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Button = styled.div`
  font-family:"Ember", sans-serif;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 2.4rem;
  letter-spacing: -.04rem;
  background-color: black;
`;

export const LinkButtonWrap = styled.div`
  margin-top:10px;
  max-width: 250px;
  background: linear-gradient(90deg, magenta, orange);
  padding-bottom: 3px;
`;

export const LinkButton = styled(Button)`
  padding-top:0.2rem;
  padding-bottom: 3px;
  font-weight:700;
  line-height:1.6;
  transition: all 0.1s linear 0.1s;

  :hover {
    padding-bottom: 0;
  }
`;

export const RegButtonWrap = styled.div`
  margin-top:10px;
  max-width: 250px;
  padding: 1rem;
  background: linear-gradient(90deg, magenta, orange);
  padding: 3px;
  border-radius: 4rem;
`;

export const RegButton = styled(Button)`
  padding: .3rem 2rem 0.3rem;
  border-radius: 4rem;
  box-sizing: border-box;
  background: linear-gradient(90deg, magenta, orange);
  transition: all .25s;

  :hover {
    background-image: none;
    background-color: black;

  }
`;

const RegWrap = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  margin-top: 200px;
  margin-left: 100px;
  height: 100%;
`;

const RegNow = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 12px;
    line-height: 3rem;
    letter-spacing: .2rem;
    font-weight: 700;
    color: white;
  }
  .colored {
    color: magenta;
  }

  .regButton {
    height:80px;
    padding-top: 1.2rem;
  }
`;

const Video = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  video {
    object-position: top right;
    object-fit: contain;
    height: 100%;
    width: 100%;
    margin-top: -50px;
  }
`;

interface headerProps{
  tog():void
}

const Header: React.FC<headerProps> = ({ tog }) => {
  const listener = () => {
    setScrollTop(window.pageYOffset);
  }

  const [scrollTop, setScrollTop] = useState(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

return (
  <Head>
    
    <Hamburger
      onClick={tog}
    />
    <NavBar top={scrollTop > 100 ? '0' : '-100px'}>
      <NavLinkWrap top={scrollTop > 100 ? '0' : '-100px'}>
        <a>
          <img src="../../../src/image/logo.png" alt='logo' />
        </a>
        <BtnsWrap>
          <a>
            <RegButtonWrap>
              <RegButton>Register Now</RegButton>
            </RegButtonWrap>
          </a>
          <a>
            <LinkButtonWrap>
              <LinkButton>Log in</LinkButton>
            </LinkButtonWrap>
          </a>
        </BtnsWrap>
      </NavLinkWrap>
    </NavBar>
    <Video>
      <video  muted loop autoPlay>
        <source src="../../../src/image/ripple-video.mp4"></source>
      </video>
    </Video>
    <RegWrap>
      <RegNow>
        <img src="../../../src/image/bigLogo.png" alt="logo"/>
        <span className="colored">NOV. 30 – DEC. 18 & JAN. 12 – 14</span>
        <span>JOIN US FOR 200+ NEW SESSIONS IN JAN. 2021</span>
        <a>
          <RegButtonWrap>
            <RegButton className="regButton">Register Now</RegButton>
          </RegButtonWrap>
        </a>
      </RegNow>
      <Slider/>
    </RegWrap>
  </Head>
)
};

const mapStateToProps = (state: {}) => ({ isOpen: state });

export default connect(mapStateToProps, actions)(Header);

import React, {useState, useEffect, useContext} from 'react';
import { connect } from 'react-redux';
import { styled } from 'linaria/react';
import * as actions from '../actions';
import Slider from './slider';
import { myContext } from './app'
import { NavLink } from 'react-router-dom';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  
  `;

const Hamburger = styled.div`
  position: fixed;
  z-index: 7;
  .c-hamburger {
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 70px;
    height: 69px;
    font-size: 0;
    text-indent: -9999px;
    appearance: none;
    box-shadow: none;
    border-radius: none;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
    :focus {
      outline: none;
      }
    span {
      display: block;
      position: absolute;
      top: 32px;
      left: 18px;
      right: 18px;
      height: 3px;
      background: white;
      ::before, ::after {
        position: absolute;
        display: block;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #fff;
        content: "";
      }
      ::before {
        top: -10px;
      }
      ::after {
        bottom: -10px;
      }
    }
  }
  .c-hamburger--htx {
    background-color: #000000;
    span {
      transition: background 0s 0.3s;
      ::before, ::after {
        transition-duration: 0.3s, 0.3s;
        transition-delay: 0.3s, 0s;
      }
      ::before {
        transition-property: top, transform;
      }
      ::after {
        transition-property: bottom, transform;
      }
    }
  }
  .is-active {
      background-color: #000000;
      span {
        background: none;
        ::before {
          top: 0;
          transform: rotate(45deg);
        }
        ::after {
          bottom: 0;
          transform: rotate(-45deg);
        }
        ::before, ::after {
          transition-delay: 0s, 0.3s;
        }
      }
    }

`;

const NavBar = styled.div`
  
  position:fixed;
  padding-left: 100px;
  padding-right: 100px;
  top: ${(props: any) => props.top};
  z-index: 6;
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
  align-items: center;
  width: 300px;
`;

const Button = styled.div`
  font-family:"Ember", sans-serif;
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 2.4rem;
  letter-spacing: -.04rem;
  background-color: black;
  cursor: pointer;
`;

const LinkButtonWrap = styled.div`
  max-width: fit-content;
  white-space: nowrap;

`;

const LinkButton = styled(Button)`
  padding-top: 0.2rem;
  padding-bottom: 3px;
  font-weight: 700;
  line-height: 1.6;
  transition: all 0.1s linear 0.1s;
  border-bottom: 3px solid;
  border-image: linear-gradient(90deg, magenta, orange) 2;

  :hover {
    padding-bottom: 0;
    margin-bottom: 3px;
  }
`;

export const RegButtonWrap = styled.div`
  margin-top: 10px;
  max-width: ${(props: string) => props.width};
  white-space: nowrap;
  padding: 1rem;
  background: linear-gradient(90deg, magenta, orange);
  padding: 3px;
  text-align: center;
  border-radius: 4rem;
`;

export const RegButton = styled(Button)`
  padding: .3rem 2rem 0.3rem;
  border-radius: 4rem;
  box-sizing: border-box;
  background: linear-gradient(90deg, magenta, orange);
  transition: all .25s;
  cursor: pointer;
  :hover {
    background-image: none;
    background-color: black;

  }
`;

export const LinkBtn = (text:string) => (
  <LinkButtonWrap>
    <LinkButton>{text}</LinkButton>
  </LinkButtonWrap>
);
export const RegBtn = (text:string, width:string = "fit-content") => (
  <RegButtonWrap width={width}>
    <RegButton>{text}</RegButton>
  </RegButtonWrap>
);

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
  a {
    margin-top: 80px;
  }
  .colored {
    color: magenta;
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
    margin-top: -150px;
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
  const Hide = useContext(myContext);

  const toClose = () => {
    Hide.changePopUpState(!Hide.popUpState);
    if (Hide.popUpState) {
      document.querySelector(".c-hamburger").classList.remove("is-active")
    } else {
      document.querySelector(".c-hamburger").classList.add("is-active")
    }
  }

return (
  <Head>
    <Hamburger
      onClick={toClose}
    >
      <button className="c-hamburger c-hamburger--htx">
        <span>toggle menu</span>
      </button>
    </Hamburger>
    
    <NavBar top={scrollTop > 100 || Hide.popUpState ? '0' : '-100px'}>
      <NavLinkWrap top={scrollTop > 100 || Hide.popUpState ? '0' : '-100px'}>
        <a href="https://reinvent.awsevents.com/?trk=direct">
          <img src="../../../src/image/logo.png" alt='logo' />
        </a>
        <BtnsWrap>
        <NavLink to="/registration">
          {RegBtn('Register Now')}
        </NavLink>
        <NavLink to="/login">
          {LinkBtn('Log In')}  
        </NavLink>  
          
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
        <NavLink to="/registration">
          {RegBtn('Register Now')}
        </NavLink>
      </RegNow>
      <Slider/>
    </RegWrap>
  </Head>
)
};

const mapStateToProps = (state: {}) => ({ isOpen: state });

export default connect(mapStateToProps, actions)(Header);

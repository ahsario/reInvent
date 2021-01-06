import React, { useState, useEffect } from 'react';
import { styled } from 'linaria/react';
import { SliderItem } from './slide';
import { NoteCardItem, FirstCPWrap } from './firstContentPart';
import caruselData from './caruselData';

const ThirdWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -90px;
`;

const Content = styled(SliderItem)`
  width: 30%;
  background-color: #161616;
  color: white;
  box-sizing: border-box;
  .container {
    padding: 74px 74px 90px 100px;
  }
  img {
    width: 100%
  }
  h4 {
      font-size: 12px;
      line-height: 3rem;
      letter-spacing: .2rem;
      font-weight: 700;
      color: magenta;
    }
  .title {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-right: 80px;
    font-size: 2.7rem;
    line-height: 2.7rem;
    letter-spacing: -.15rem;
  }
  .bold {
    font-weight: 900;
  }
  
`;

const Carusel = styled(FirstCPWrap)`
  display: block;
  padding: 30px 90px 30px 100px;
  box-sizing: border-box;
  margin: 0;
  width: 70%;
  background: linear-gradient(0deg, magenta, orange);
  .note-btn{
    margin-top: 0;
  }
  .disactive {
    background-color: orange;
  }
`;

interface IProps{
  head: string,
  text: string,
  img: string,
  btnText: string,
}

const ThirdCP: React.FC = () => {
  let [left, setLeft] = useState(0);
  
  useEffect(() => {
    document.querySelector('.toright').addEventListener("click", toTheRight);
    document.querySelector('.toleft').addEventListener("click", toTheLeft);
    return () => {
      document.querySelector('.toright').removeEventListener("click", toTheRight);
      document.querySelector('.toleft').removeEventListener("click", toTheLeft);
    };
  });
  
  const NoteCard: React.FC<IProps> = ({img, head, text, btnText}) => (
    <NoteCardItem className="card" left={left}>
      <img src={img}/>
      <div className="note-text">
        <div className="sliderItemHead">{head}</div>
        <div className="sliderItemText">{text}</div>
        <a href="https://reinvent.awsevents.com/learn/training-and-certification/?trk=direct">
          <div className="sliderItemButtonWrap">
            <div className="sliderItemButton">{btnText}</div>
          </div>
        </a>
      </div>
    </NoteCardItem>
  );

  let CaruselComponent = caruselData.map(note => <NoteCard key={note.id} head={note.head} text={note.text} img={note.img} btnText='Learn More'/>);
  const toTheRight = () => {
    if ( left == 0 ) {
      setLeft(left-=50);
      document.querySelector('.toleft').classList.remove('disactive');
      document.querySelector('.toright').classList.add('disactive');
    }  
  }

  const toTheLeft = () => {
    if ( left == -50 ) {
      setLeft(left+=50);
      document.querySelector('.toright').classList.remove('disactive');
      document.querySelector('.toleft').classList.add('disactive');
    } 
  }
  return (
    <ThirdWrap>
      <Content>
        <img src="../../../src/image/news-ripple-small.png" alt='background' />
        <div className="container">
          <h4>ABOUT RE:INVENT 2020</h4>
          <div className="title">Get inspired to <div className="bold">build</div></div>
          <div className="text">Enjoy unlimited access to hundreds of sessions led by AWS experts. Hear from cloud leaders and be the first to learn what’s new.</div>  
        </div>  
      </Content>
      <Carusel>
        <h4>LEARN</h4>
        <div className="note-title-wrap">
          <div className="title"><span className="bold">Interactive</span> ways to learn</div>
          <div className="note-btn to-the-left toleft disactive">&#706;</div>
          <div className="note-btn to-the-right toright" >&#707;</div>
        </div>
        <div className="note-card-wrap">
          {CaruselComponent}
        </div>
      </Carusel>
    </ThirdWrap>
  )
};

export default ThirdCP;
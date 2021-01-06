import React, { useState, useEffect } from 'react';
import { styled } from 'linaria/react';
import { SliderItem } from './slide';
import keyNotesData from './keyNotesData';

export const FirstCPWrap = styled.div`
  display: flex;
  justify-content: space-between;
  
  margin-top: 100px;
  margin-left: 100px;
  color: white;
  h4 {
    font-size: 12px;
    line-height: 3rem;
    letter-spacing: .2rem;
    font-weight: 700;
  }
  
  .note-title-wrap {
    display: flex;
    padding-bottom: 40px;
  }

  .note-btn{
    display: inline-block;
    margin-top: 50px;
    width: 50px;
    height: 50px;
    border: 3px solid white;
    border-radius: 50%;
    text-align: center;
    font-size: 30px;
    line-height: 50px;
    margin-right: 10px;
    cursor: pointer;
    transition: background-color 0.5s;
    :hover {
      background-color: #fff;
      color: #000;
    }
    
  }
  .disactive {
      background-color: #161616; 
      color: black; 
      border: none;
      :hover{
        background-color: #161616; 
        color: black; 
        border: none;
      }
    }
  .title {
    padding-right: 80px;
    font-size: 2.7rem;
    line-height: 2.7rem;
    letter-spacing: -.15rem;
  }
  .bold {
    font-weight: 900;
  }
  .key-notes{
    padding-top: 50px;
    margin-right: 40px;
    width: 65%;
    h4 {
      color: magenta;
    }
    
    
  }

  .play {
    padding-top: 50px;
    padding-left: 30px;
    width: 30%;
    background: linear-gradient(0deg, magenta, orange);

    img {
      margin-bottom: 60px;
      margin-top: 60px;
      width: 100%;
    }
    .play-btn {
      padding-left: 20px;
      padding-right: 20px;
      width: fit-content;
      height: 50px;
      border: 3px solid white;
      border-radius: 50px;
      text-align: center;
      font-size: 18px;
      font-weight: 900;
      line-height: 50px;
      transition: all 0.1s linear 0.1s;
      :hover {
        background-color: #fff;
        color: #000;
      }
    }
  }

  .note-card-wrap {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    transition: all 0.25s linear 0.35s;

  }
`;

export const NoteCardItem = styled(SliderItem)`
  display: block;
  position: relative;
  left: ${(props: any) => props.left+"%"};
  margin-right: 1%;
  min-width: 49%;
  height: 550px;
  background-color: #161616;
  transition: all 2s;
  
  .note-text {
    padding: 30px;
  }
  img {
    width: 100%;
  }
`;

interface IProps{
  head: string,
  text: string,
  img: string,
  btnText: string,
}

const FirstCP: React.FC = () => {
  let [left, setLeft] = useState(0);
  
  useEffect(() => {
    document.querySelector('.to-the-right').addEventListener("click", toTheRight);
    document.querySelector('.to-the-left').addEventListener("click", toTheLeft);
    return () => {
      document.querySelector('.to-the-right').removeEventListener("click", toTheRight);
      document.querySelector('.to-the-left').removeEventListener("click", toTheLeft);
    };
  });
  
  const NoteCard: React.FC<IProps> = ({img, head, text, btnText}) => (
    <NoteCardItem className="card" left={left}>
      <img src={img}/>
      <div className="note-text">
        <div className="sliderItemHead">{head}</div>
        <div className="sliderItemText">{text}</div>
        <a href="https://virtual.awsevents.com/user/login?trk=direct">
          <div className="sliderItemButtonWrap">
            <div className="sliderItemButton">{btnText}</div>
          </div>
        </a>
      </div>
    </NoteCardItem>
  );

  let KeyNotesComponent = keyNotesData.map(note => <NoteCard key={note.id} head={note.head} text={note.text} img={note.img} btnText='Watch Now'/>);
  const toTheRight = () => {
    if ( left == 0 || left == -50) {
      setLeft(left-=100);
      document.querySelector('.to-the-left').classList.remove('disactive');
    } else {
      if (left == -100)
      setLeft(left-=50)
      document.querySelector('.to-the-right').classList.add('disactive');
    }  
  }

  const toTheLeft = () => {
    if ( left == -150 || left == -100) {
      setLeft(left+=100);
      document.querySelector('.to-the-right').classList.remove('disactive');
    } else {
      if (left == -50)
      setLeft(left+=50)
      document.querySelector('.to-the-left').classList.add('disactive');
    }  
  }
  return (
    <FirstCPWrap>
      <div className="key-notes">
        <h4>KEYNOTES</h4>
        <div className="note-title-wrap">
          <div className="title"><span className="bold">Watch the 2020 keynotes</span> on demand</div>
          <div className="note-btn to-the-left disactive">&#706;</div>
          <div className="note-btn to-the-right" >&#707;</div>

        </div>
        
        <div className="note-card-wrap">
          {KeyNotesComponent}
        </div>
      </div>
      <div className="play">
        <h4>PLAY</h4>
        <div className="title">Can you <span className="bold">solve the mystery</span>?</div>
        <img src="../../../src/image/play.jpg" alt="logo" />
        <a href="https://reinvent.awsevents.com/play/cable-detective/?trk=direct">
          <div className="play-btn">Play Now</div>
        </a>
      </div>
    </FirstCPWrap>
  )
};

export default FirstCP;

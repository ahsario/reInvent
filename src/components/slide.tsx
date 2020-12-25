import React from 'react';
import { styled } from 'linaria/react';


const SliderItem = styled.div`
  display: ${(props: any) => props.display};
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: -.02px;
  font-weight: 400;
  .sliderItemHead {
    font-size: 1.2rem;
  }
  .sliderItemText {
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .sliderItemButtonWrap {
    margin-top:10px;
    max-width: 250px;
    background: linear-gradient(90deg, magenta, orange);
    padding-bottom: 3px;
    .sliderItemButton {
      font-family:"Ember", sans-serif;
      color: white;
      font-size: 1rem;
      letter-spacing: -.04rem;
      background-color: #161616;
      padding-top:0.2rem;
      padding-bottom: 3px;
      font-weight:700;
      line-height:1.6;
      transition: all 0.1s linear 0.1s;
      cursor: pointer;
      :hover {
        padding-bottom: 0;
      }
    }
  }
`;

interface IProps{
  head: string,
  text: string,
  btnText: string,
  display: string
}

const Slide: React.FC<IProps> = ({head, text, btnText, display}) => (
  <SliderItem display={display}>
      <div className="sliderItemHead">{head}</div>
      <div className="sliderItemText">{text}</div>
      <div className="sliderItemButtonWrap">
        <div className="sliderItemButton">{btnText}
        </div>
      </div>
    </SliderItem>
);

export default Slide;
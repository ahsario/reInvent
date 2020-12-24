import React, { useState } from 'react';
import { styled } from 'linaria/react';
import Slide from './slide';
import slidesData from './slidesData';

const SliderWrap = styled.div`
  position: relative;
  margin-top: 50px;
  max-width: 450px;
  height: 340px;
  background-color: #161616;
  padding: 30px;
  box-sizing: border-box;
  color: white;
  .sliderTitle {
    font-size: 12px;
    line-height: 3rem;
    letter-spacing: .2rem;
    font-weight: 700;
    color: magenta;
  }
  .arrow {
    position: absolute;
    cursor: pointer;
    top: 40px;
    color: magenta;
    transition: 0.3s;
    font-size: 1.3rem;
  }
  .prev {
    right: 90px;
  }
  .prev:hover {
    right: 95px;
  }
  .next {
    right: 40px;
  }
  .next:hover {
    right: 35px;
  }
`;
const newArr = slidesData.map(slide =>{return ({...slide, display:'block'} )});
interface IProps{
  head: string,
  text: string,
  btnText: string,
  display: string
}

const Slider = () => {

  
  const [arrSlides, setArrSlides] = useState(slidesData);
  const SlidesComponent = arrSlides.map(slide => <Slide key={slide.id} head={slide.head} text={slide.text} btnText={slide.btnText} display='none'/>);
  
  // let slideIndex = 1;
  // function showSlides(n:number){

  //   if (n > arrSlides.length) {
  //       slideIndex = 1;
  //   }
  //   if (n < 1 ) {
  //       slideIndex = arrSlides.length;
  //   }

  //   arrSlides.forEach( (item) => item.display = 'none' );
  //   arrSlides[slideIndex - 1].display = 'block';
  // }
const showSlides = () => {
  setArrSlides(newArr);
  console.log(newArr);
}
  return (
    <SliderWrap>
      <div className="sliderTitle">LATEST</div>
      <div className="arrow prev" onClick={showSlides}>&#706;</div>
      <div className="arrow next">&#707;</div>
      {SlidesComponent}
  </SliderWrap>
  )
}
  


export default Slider;

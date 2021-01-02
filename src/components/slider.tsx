import React, { useState } from 'react';
import { styled } from 'linaria/react';
import Slide from './slide';
import slidesData from './slidesData';

const SliderWrap = styled.div`
  position: relative;
  margin-top: 50px;
  max-width: 450px;
  min-height: 340px;
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
interface IProps{
  head: string,
  text: string,
  btnText: string,
  display: string
}

const Slider = () => {

  const nextSlide = () => {
    setCurrentSlide(() => currentSlide == arrSlides.length ? currentSlide = 1 : ++currentSlide);
    setArrSlides(()=>slidesData.map(slide =>{return (slide.id == currentSlide ? {...slide, display:'block'} : {...slide, display:'none'} )}));
    console.log(arrSlides);
    console.log(currentSlide);
  }
  const prevSlide = () => {
    setCurrentSlide(() => currentSlide == 1 ? currentSlide = arrSlides.length : --currentSlide);
    setArrSlides(()=>slidesData.map(slide =>{return (slide.id == currentSlide ? {...slide, display:'block'} : {...slide, display:'none'} )}));
   
  }
  
  let [currentSlide, setCurrentSlide] = useState(1);
  let [arrSlides, setArrSlides] = useState(slidesData);
  let SlidesComponent = arrSlides.map(slide => <Slide key={slide.id} head={slide.head} text={slide.text} btnText={slide.btnText} display={slide.display}/>);
  
  return (
    <SliderWrap>
      <div className="sliderTitle">LATEST</div>
      <div className="arrow prev" onClick={prevSlide}>&#706;</div>
      <div className="arrow next" onClick={nextSlide}>&#707;</div>
      {SlidesComponent}
  </SliderWrap>
  )
}
  


export default Slider;

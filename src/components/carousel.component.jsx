import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import IMG from '../assets/zerk.jpg';

const SliderWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 4rem;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;

  img {
    height: 300px;
    width: 100%;
  }
`;

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <Slide>
          <img src={IMG} alt='' />
        </Slide>
        <Slide>
          <img src={IMG} alt='' />
        </Slide>
        <Slide>
          <img src={IMG} alt='' />
        </Slide>
        <Slide>
          <img src={IMG} alt='' />
        </Slide>
      </Slider>
    </SliderWrapper>
  );
};

export default Carousel;

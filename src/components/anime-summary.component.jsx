import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IMG from '../assets/zerk.jpg';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  background-color: rgba(0, 0, 0, 0.7);
  /* height: 350px; */
  margin: 200px auto 0px auto;
  padding: 30px 50px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  color: white;

  h1 {
    margin-bottom: 50px;
  }
`;
const Image = styled.div`
  min-width: 220px;
  width: 20%;
  height: 100%;

  img {
    height: 330px;
    width: 100%;
  }
`;
const Description = styled.div`
  width: 40%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  width: 20%;
  /* min-width: 400px; */
`;

const AnimeSummary = ({
  anime: { description, genres, image, name, year },
}) => {
  return (
    <Wrapper>
      <Image>
        <img src={image} />
      </Image>
      <Description>
        <h1>Description</h1>
        {description}
      </Description>

      <Info>
        <h1>Info</h1>
        <span>name: {name}</span>
        <span>genre: {genres.join(' , ')}</span>
        <span>year: {year} </span>
        <span>MAL: 9.9</span>
      </Info>
    </Wrapper>
  );
};

AnimeSummary.propTypes = {};

export default AnimeSummary;

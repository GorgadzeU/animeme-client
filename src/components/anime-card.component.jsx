import React from "react";
import styled from "styled-components";

const CardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 1s ease;
`;

const Card = styled.div`
  height: 250px;
  width: 200px;
  margin: 1rem 0;
  border-radius: 5px;
  overflow: hidden;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  position: relative;
  transition: filter 1s ease;

  &:hover ${CardInfo} {
    height: 100%;
  }

  &:hover {
    filter: grayscale(0.8);
  }
`;

const CardInfoTitle = styled.h1`
  font-size: 1.5rem;
  padding-bottom: 5px;
  border-bottom: 0.5px solid black;
`;

const CardInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 5px;
  border-bottom: 0.5px solid black;
`;

const CardInfoDesc = styled.div`
  padding: 10px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.3rem;
`;

const AnimeCard = ({ name, description, image, year }) => {
  return (
    <Card image={image}>
      <CardInfo>
        <CardInfoTitle>{name}</CardInfoTitle>
        <CardInfoDetails>
          <span>Year: {year}</span>
          <span>Episodes: 25</span>
          {/* <span>MAL Rating: {malRating}</span> */}
        </CardInfoDetails>
        <CardInfoDesc>{description}</CardInfoDesc>
      </CardInfo>
    </Card>
  );
};

export default AnimeCard;

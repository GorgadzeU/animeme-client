import React from "react";
import styled from "styled-components";
import AnimeCard from "../components/anime-card.component";

const AnimeListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  justify-content: center;
`;

const AnimeList = ({ animeList }) => {
  return (
    <AnimeListWrapper>
      {animeList &&
        animeList.length > 0 &&
        animeList.map(
          ({ name, image, description, malRating, _id, year = "test" }) => {
            return (
              <AnimeCard
                key={_id}
                image={image}
                name={name}
                description={description}
                malRating={malRating}
                year={year}
              />
            );
          }
        )}
    </AnimeListWrapper>
  );
};

export default AnimeList;

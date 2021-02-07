import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AnimeCard from '../components/anime-card.component';

const AnimeListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  justify-content: center;
`;

const AnimeList = ({ animeList, history }) => {
  console.log(animeList);
  return (
    <AnimeListWrapper>
      {animeList &&
        animeList.length > 0 &&
        animeList.map(({ name, mainImage, description, _id }) => {
          return (
            <AnimeCard
              key={_id}
              image={mainImage}
              name={name}
              description={description}
              click={() => history.push(`/anime/${_id}`)}
            />
          );
        })}
    </AnimeListWrapper>
  );
};

export default withRouter(AnimeList);

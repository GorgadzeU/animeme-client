import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AnimeCard from '../components/anime-card.component';

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
        animeList.map(({ title, image, desc, malRating, id }) => (
          <AnimeCard
            key={id}
            image={image}
            title={title}
            desc={desc}
            malRating={malRating}
          />
        ))}
    </AnimeListWrapper>
  );
};

const mapStateToProps = (state) => ({
  animeList: state.anime.animeList,
});

export default connect(mapStateToProps)(AnimeList);

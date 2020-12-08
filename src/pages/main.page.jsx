import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PageWrapper from '../components/UI/page-wrapper';
import AnimeList from '../containers/anime-list.container';
import Carousel from '../components/carousel.component';

import { FetcAnimeListStart } from '../redux/anime/anime.actions';

const MainPage = ({ FetcAnimeListStart }) => {
  useEffect(() => {
    FetcAnimeListStart();
  }, []);
  return (
    <PageWrapper>
      <Carousel />
      <AnimeList />
    </PageWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  FetcAnimeListStart: () => dispatch(FetcAnimeListStart()),
});
export default connect(null, mapDispatchToProps)(MainPage);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageWrapper from '../components/UI/page-wrapper';
import styled from 'styled-components';
import AnimeSummary from '../components/anime-summary.component';
import AnimePlayer from '../components/anime-player.component';

import { FetchAnimeByIdStart } from '../redux/anime/anime.actions';

import IMG from '../assets/zerkpage.jpg';

const Container = styled(PageWrapper)`
  max-width: 100vw;
  background: url(${IMG}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
`;

const LoadingContainer = styled(PageWrapper)`
  max-width: 100vw;
`;

const AnimePage = ({ anime, episodeList, loading, fetchById, match }) => {
  useEffect(() => {
    fetchById(match.params.animeId);
  }, [fetchById, match.params.animeId]);

  if (!anime) {
    return (
      <LoadingContainer>
        <h1>LOADING....</h1>
      </LoadingContainer>
    );
  }
  return (
    <>
      {/* <BackgroundImage /> */}
      <Container>
        <AnimeSummary anime={anime} />
        {/* <AnimePlayer episodeList={episodeList} /> */}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  anime: state.anime.anime,
  loading: state.anime.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchById: (id) => dispatch(FetchAnimeByIdStart(id)),
});
AnimePage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnimePage);

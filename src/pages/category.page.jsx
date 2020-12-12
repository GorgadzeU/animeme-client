import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../components/UI/page-wrapper';
import AnimeList from '../containers/anime-list.container';

import { FetchAnimeByCatStart } from '../redux/anime/anime.actions';

const CategoryPage = ({ match, fetchCatAnimes, animeList }) => {
  useEffect(() => {
    fetchCatAnimes(match.params.category);
  }, [match.params.category, fetchCatAnimes]);
  return (
    <PageWrapper>
      <AnimeList animeList={animeList} />
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  animeList: state.anime.animeCatList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatAnimes: (cat) => dispatch(FetchAnimeByCatStart(cat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);

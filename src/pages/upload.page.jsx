import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PageWrapper from '../components/UI/page-wrapper';

const UploadPage = ({ user, history }) => {
  useEffect(() => {
    if (!user) {
      history.push('/');
    } else if (!user.isAdmin) {
      history.push('/');
    }
  }, [user, history]);

  return <PageWrapper>HENLO ADMIn</PageWrapper>;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UploadPage);

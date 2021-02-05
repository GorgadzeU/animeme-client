import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { closeForms } from '../redux/forms/forms.actions';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

const Backdrop = ({ closeForms }) => {
  return <Wrapper onClick={closeForms}></Wrapper>;
};

const mapDispatchToProps = (dispatch) => ({
  closeForms: () => dispatch(closeForms()),
});

export default connect(null, mapDispatchToProps)(Backdrop);

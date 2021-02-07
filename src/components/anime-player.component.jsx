import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 30px 50px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const AnimePlayer = ({ episodes }) => {
  console.log(episodes);
  const [ep, setEp] = useState(0);

  if (!episodes) {
    return <h1>No episodes</h1>;
  }

  return (
    <Wrapper>
      <Select
        name='episode-select'
        className='episode-select'
        onChange={(e) => setEp(e.target.value)}
      >
        {episodes.map((ep, i) => (
          <option value={i}>Episode - {ep.ep}</option>
        ))}
        {/* <option value='0'>1</option>
        <option value='1'>2</option> */}
      </Select>
      <iframe
        width='100%'
        height='500px'
        src={episodes[ep].url}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

AnimePlayer.propTypes = {};

export default AnimePlayer;

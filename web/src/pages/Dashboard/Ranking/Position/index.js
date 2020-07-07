import React from 'react';
import PropTypes from 'prop-types';

import { Container, Pos, Name, Score, NameBox } from './styles';

function Position({ position, name, image, score }) {
  return (
    <Container position={position}>
      <Pos>#{position}</Pos>
      <NameBox>
        <img src={image} alt={name + ' profile picture'} />
        <Name>{name}</Name>
      </NameBox>
      <Score>{score}</Score>
    </Container>
  );
}

export default Position;

Position.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

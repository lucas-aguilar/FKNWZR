import React from 'react';
import PropTypes from 'prop-types';
// import { FaQuestionCircle } from 'react-icons/fa';

import { Container } from './styles';

function PlayerScore({ score }) {
  return (
    <Container>
      <span> Pontos:</span> <strong>{score}</strong>
      {/* <button>
        <FaQuestionCircle size={40} />
      </button> */}
    </Container>
  );
}

export default PlayerScore;

PlayerScore.propTypes = {
  score: PropTypes.number.isRequired,
};

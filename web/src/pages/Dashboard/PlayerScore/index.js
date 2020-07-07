import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

import { Container } from './styles';

function PlayerScore() {
  return (
    <Container>
      <span> Pontos:</span> <strong>13</strong>
      <button>
        <FaQuestionCircle size={40} />
      </button>
    </Container>
  );
}

export default PlayerScore;

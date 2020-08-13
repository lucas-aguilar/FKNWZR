import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function PlayCTABtn({ hasDone }) {
  const history = useHistory();

  function handleClick() {
    history.push('/instrucoes');
  }

  return (
    <Container onClick={handleClick}>
      Jogar {hasDone ? 'novamente' : 'o desafio'}
    </Container>
  );
}

export default PlayCTABtn;

PlayCTABtn.propTypes = {
  hasDone: PropTypes.bool.isRequired,
};

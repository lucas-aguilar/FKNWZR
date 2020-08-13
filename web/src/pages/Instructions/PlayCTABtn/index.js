import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function PlayCTABtn() {
  const history = useHistory();

  function handleClick() {
    history.push('/desafio');
  }

  return <Container onClick={handleClick}>Jogar AGORA!</Container>;
}

export default PlayCTABtn;

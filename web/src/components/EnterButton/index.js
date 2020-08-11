import React from 'react';
import { useHistory } from 'react-router-dom';

import { Btn } from './styles';

function EnterButton() {
  const history = useHistory();

  function handleClick() {
    history.push('/inicio');
  }
  return <Btn onClick={handleClick}>Entrar</Btn>;
}

export default EnterButton;

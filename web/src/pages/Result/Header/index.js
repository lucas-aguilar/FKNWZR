import React from 'react';

import { useHistory } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';

import { Container, BackButton } from './styles';

function Header() {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <Container>
      <BackButton onClick={handleClick}>
        <FaChevronCircleLeft size={36} /> <span>Voltar</span>
      </BackButton>
      <span> Obrigado por jogar !</span>
    </Container>
  );
}

export default Header;

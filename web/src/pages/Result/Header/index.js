import React from 'react';
import PropTypes from 'prop-types';

import { FaChevronCircleLeft } from 'react-icons/fa';

import { Container, BackButton } from './styles';

function Header({ backClickAction }) {
  return (
    <Container>
      <BackButton onClick={backClickAction}>
        <FaChevronCircleLeft size={36} /> <span>Voltar</span>
      </BackButton>
      <span> Obrigado por jogar !</span>
    </Container>
  );
}

Header.propTypes = {
  backClickAction: PropTypes.func.isRequired,
};

export default Header;

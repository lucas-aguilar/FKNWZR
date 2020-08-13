import React from 'react';
import PropTypes from 'prop-types';

import PlayCTABtn from '../PlayCTABtn/';

import { Container, Title, InviteBtn } from './styles';

function Header({ hasDone }) {
  return (
    <Container>
      <Title>
        {hasDone ? 'Obrigado por jogar o' : 'Bem vindo(a) ao'}
        <br /> <strong>Fake newzer</strong>
      </Title>
      <PlayCTABtn hasDone={hasDone} />
      <InviteBtn>Convidar amigos</InviteBtn>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  hasDone: PropTypes.bool.isRequired,
};

import React from 'react';

import PlayCTABtn from '../PlayCTABtn/';

import { Container, Title, InviteBtn } from './styles';

function Header() {
  return (
    <Container>
      <Title>
        Bem vindo(a) ao <br /> <strong>Fake newzer</strong>
      </Title>
      <PlayCTABtn />
      <InviteBtn>Convidar amigos</InviteBtn>
    </Container>
  );
}

export default Header;

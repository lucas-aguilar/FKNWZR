import React from 'react';

import PlayCTABtn from '../PlayCTABtn/';
import { Container, Title } from './styles';

function Header() {
  return (
    <Container>
      <Title>
        Desafio <br /> <strong>Fake newzer</strong>
      </Title>
      <p>
        O desafio te mostrará 10 manchetes, uma de cada vez, e você deverá
        adivinhar se a notícia é real ou se foi inventada (FAKE).
      </p>
      <p>
        Você terá 10 segundos para responder cada uma, ou seja, 1:40 para
        responder tudo. Caso sobre tempo, os segundos serão somados ao seu total
        de pontos.
      </p>
      <span>Você está pronto?</span>
      <PlayCTABtn />
    </Container>
  );
}

export default Header;

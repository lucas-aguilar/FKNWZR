import React from 'react';

import Header from './Header';
import FBLoginButton from '../../components/FBLoginButton';

import { Main, MainHeading, SecondHeading, PlayAnon } from './styles';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <MainHeading>
          Adivinhe quais notícias são verdadeiras e quais são fake news !
        </MainHeading>
        <FBLoginButton />
        <PlayAnon>Ou entrar como anônimo</PlayAnon>
        <SecondHeading>Faça Login e jogue contra seus amigos !</SecondHeading>
      </Main>
    </>
  );
}

export default Home;

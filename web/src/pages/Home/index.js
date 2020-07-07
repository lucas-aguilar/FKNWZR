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
          Adivinhe quais notícias são verdadeiras e quais são fake !
        </MainHeading>
        <FBLoginButton />
        <SecondHeading>Login para jogar com amigos !</SecondHeading>
        <PlayAnon>Ou jogar anônimo</PlayAnon>
      </Main>
    </>
  );
}

export default Home;

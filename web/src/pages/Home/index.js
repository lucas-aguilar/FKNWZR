import React from 'react';

import Header from './Header';
import FBLoginButton from '../../components/FBLoginButton';

import { Main, MainHeading, SecondHeading, PlayAnon } from './styles';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <MainHeading>Guess which news is true and which is fake !</MainHeading>
        <FBLoginButton />
        <SecondHeading>Login to Play against friends !</SecondHeading>
        <PlayAnon>Or Play Anonymously</PlayAnon>
      </Main>
    </>
  );
}

export default Home;

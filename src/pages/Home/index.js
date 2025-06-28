import React from "react";

import Header from "./Header";
import EnterButton from "../../components/EnterButton";

import { Main, MainHeading /* , SecondHeading, PlayAnon */ } from "./styles";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <MainHeading>Guess which news is true and which is fake</MainHeading>
        {/* <FBLoginButton /> */}
        <EnterButton />
        {/* <PlayAnon>Ou entrar como anônimo</PlayAnon> */}
        {/* <SecondHeading>Faça Login e jogue contra seus amigos !</SecondHeading> */}
      </Main>
    </>
  );
}

export default Home;

import React from "react";

import PlayCTABtn from "../PlayCTABtn/";
import { Container, Title } from "./styles";

function Header() {
  return (
    <Container>
      <Title>
        Fake newzer <br /> <strong>Challenge</strong>
      </Title>
      <p>
        The challenge will show you 10 headlines, one at a time, and you will
        have to guess whether the news is real or made up (FAKE NEWS)
      </p>
      <p>
        You will have 60 seconds to answer everything. If you have time left,
        the seconds will be added to your total points.
      </p>
      <span>Are you ready?</span>
      <PlayCTABtn />
    </Container>
  );
}

export default Header;

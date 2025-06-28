import React from "react";
import PropTypes from "prop-types";

import PlayCTABtn from "../PlayCTABtn/";

import { Container, Title, InviteBtn } from "./styles";

function Header({ hasDone }) {
  return (
    <Container>
      <Title>
        {hasDone ? "Thank you for playing" : "Welcome to"}
        <br /> <strong>Fake newzer</strong>
      </Title>
      <PlayCTABtn hasDone={hasDone} />
      <InviteBtn>Invite friends</InviteBtn>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  hasDone: PropTypes.bool.isRequired,
};

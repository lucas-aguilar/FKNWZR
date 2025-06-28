import React from "react";
import PropTypes from "prop-types";

import { FaChevronCircleLeft } from "react-icons/fa";

import { Container, BackButton } from "./styles";

function Header({ backClickAction }) {
  return (
    <Container>
      <BackButton onClick={backClickAction}>
        <FaChevronCircleLeft size={36} /> <span>Back</span>
      </BackButton>
      <span> Thank you for playing !</span>
    </Container>
  );
}

Header.propTypes = {
  backClickAction: PropTypes.func.isRequired,
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import { Container, Points } from "./styles";

function Score({ score }) {
  return (
    <Container>
      <span>Score: </span>
      <Points>{score}</Points>
    </Container>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;

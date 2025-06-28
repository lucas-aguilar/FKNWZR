import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

function PlayCTABtn({ hasDone }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/instrucoes");
  }

  return (
    <Container onClick={handleClick}>
      Jogar {hasDone ? "novamente" : "o desafio"}
    </Container>
  );
}

export default PlayCTABtn;

PlayCTABtn.propTypes = {
  hasDone: PropTypes.bool.isRequired,
};

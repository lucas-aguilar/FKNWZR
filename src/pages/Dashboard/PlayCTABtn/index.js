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
      Play {hasDone ? "again" : "the challenge"}
    </Container>
  );
}

export default PlayCTABtn;

PlayCTABtn.propTypes = {
  hasDone: PropTypes.bool.isRequired,
};

import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

function PlayCTABtn() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/desafio");
  }

  return <Container onClick={handleClick}>Play now!</Container>;
}

export default PlayCTABtn;

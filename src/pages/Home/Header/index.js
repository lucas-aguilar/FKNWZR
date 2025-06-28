import { Container, Subtitle } from "./styles";

import LogoImg from "../../../assets/images/logo-title.png";

function Header() {
  return (
    <Container>
      <img src={LogoImg} alt="FAKE NEWZER" />
      <Subtitle>
        --- The Game ---{" "}
        {/* <br />
        Novos desafios todos os dias ! */}
      </Subtitle>
    </Container>
  );
}

export default Header;

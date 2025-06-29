import { useNavigate } from "react-router-dom";

import { LoginButton } from "./styles";

import FacebookImg from "../../assets/images/facebook.png";

function FBLoginButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/start");
  }
  return (
    <LoginButton onClick={handleClick}>
      <img src={FacebookImg} alt="Facebook Pixelated Logo" />
      Facebook Login
    </LoginButton>
  );
}

export default FBLoginButton;

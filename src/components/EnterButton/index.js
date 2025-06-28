import React from "react";
import { useNavigate } from "react-router-dom";

import { Btn } from "./styles";

function EnterButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/inicio");
  }
  return <Btn onClick={handleClick}>Entrar</Btn>;
}

export default EnterButton;

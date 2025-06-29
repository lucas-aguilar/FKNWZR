import React from "react";
import { useNavigate } from "react-router-dom";

import { Btn } from "./styles";

function EnterButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/start");
  }
  return <Btn onClick={handleClick}>Lets go!</Btn>;
}

export default EnterButton;

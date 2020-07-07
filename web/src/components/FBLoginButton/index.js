import React from 'react';
import { useHistory } from 'react-router-dom';

import { LoginButton } from './styles';

import FacebookImg from '../../assets/images/facebook.png';

function FBLoginButton() {
  const history = useHistory();

  function handleClick() {
    history.push('/inicio');
  }
  return (
    <LoginButton onClick={handleClick}>
      <img src={FacebookImg} alt="Facebook Pixelated Logo" />
      Facebook Login
    </LoginButton>
  );
}

export default FBLoginButton;

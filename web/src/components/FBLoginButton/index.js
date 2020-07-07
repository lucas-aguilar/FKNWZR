import React from 'react';

import { LoginButton } from './styles';

import FacebookImg from '../../assets/images/facebook.png';

function FBLoginButton() {
  return (
    <LoginButton>
      <img src={FacebookImg} alt="Facebook Pixelated Logo" />
      Facebook Login
    </LoginButton>
  );
}

export default FBLoginButton;

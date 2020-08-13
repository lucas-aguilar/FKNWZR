import React from 'react';
// import { FaBars } from 'react-icons/fa';

import { Container } from './styles';

import logoSymbol from '../../assets/images/logo-symbol.png';

function Navbar() {
  return (
    <Container>
      {/* <button>
        <FaBars className="menu-icon" size={40} />
      </button> */}
      <img src={logoSymbol} alt="FakeNewzer Logo" />
    </Container>
  );
}

export default Navbar;

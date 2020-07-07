import React from 'react';

import Navbar from '../../components/Navbar';

import Header from './Header';
import PlayerScore from './PlayerScore';
import Ranking from './Ranking';

// import { Container } from './styles';

function Dashboard() {
  return (
    <>
      <Navbar />
      <Header />
      <PlayerScore />
      <Ranking />
    </>
  );
}

export default Dashboard;

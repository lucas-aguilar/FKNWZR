import React from 'react';
import PropTypes from 'prop-types';
import { Container, QstCounter, TimeLeft } from './styles';

function Topbar({ qstNum, timeLeft }) {
  return (
    <Container>
      <QstCounter>{qstNum}</QstCounter>
      <TimeLeft>Tempo: {timeLeft}</TimeLeft>
    </Container>
  );
}

export default Topbar;

Topbar.propTypes = {
  qstNum: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Container, QstCounter, TimeLeft } from './styles';

const getFormattedTime = (seconds) =>
  `${Math.floor(seconds / 60)}:${
    seconds % 60 > 9 ? seconds % 60 : '0' + (seconds % 60)
  }`;

function Topbar({ qstNum, secondsLeft }) {
  return (
    <Container>
      <QstCounter>{qstNum}</QstCounter>
      <TimeLeft>Tempo: {getFormattedTime(secondsLeft)}</TimeLeft>
    </Container>
  );
}

export default Topbar;

Topbar.propTypes = {
  qstNum: PropTypes.string.isRequired,
  secondsLeft: PropTypes.number.isRequired,
};

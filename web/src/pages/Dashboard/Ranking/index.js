import React, { useState, useEffect } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Position from './Position';

import profileImg from '../../../assets/images/profile.png';

import { Container, ButtonGroupContainer } from './styles';

function Ranking() {
  const [filterValue, setFilterValue] = useState('global');
  const [players] = useState([
    { name: 'Paul Travolta', score: 18, image: profileImg, isFriend: false },
    { name: 'John McCartney', score: 13, image: profileImg, isFriend: false },
    { name: 'John Sons', score: 12, image: profileImg, isFriend: false },
    { name: 'Roberto Augusto', score: 10, image: profileImg, isFriend: true },
    { name: 'João Renato', score: 9, image: profileImg, isFriend: true },
    { name: 'Marco Aurélio', score: 5, image: profileImg, isFriend: true },
  ]);
  const [rankingPlayers, setRankingPlayers] = useState(players);

  const filters = [
    { name: 'Amigos', value: 'friends' },
    { name: 'Geral', value: 'global' },
  ];

  useEffect(() => {
    if (players)
      if (filterValue === 'friends')
        setRankingPlayers(players.filter((v) => v.isFriend === true));
      else setRankingPlayers(players);
  }, [filterValue, players]);

  return (
    <Container>
      <h3>Ranking</h3>
      <ButtonGroupContainer>
        <ButtonGroup toggle>
          {filters.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={filterValue === radio.value}
              onChange={(e) => setFilterValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </ButtonGroupContainer>
      {rankingPlayers.map((player, idx) =>
        filterValue === 'friends' ? (
          player.isFriend ? (
            <Position
              key={idx}
              position={idx + 1}
              name={player.name}
              image={player.image}
              score={player.score}
            />
          ) : (
            ''
          )
        ) : (
          <Position
            key={idx}
            position={idx + 1}
            name={player.name}
            image={player.image}
            score={player.score}
          />
        )
      )}
    </Container>
  );
}

export default Ranking;

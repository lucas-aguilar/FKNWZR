import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../../components/Navbar';

import Header from './Header';
import PlayerScore from './PlayerScore';
// import Ranking from './Ranking';

import { Container } from './styles';

function Dashboard() {
  const dispatch = useDispatch();

  const score = useSelector((state) => state.answersReducer.score);
  const isDone = useSelector((state) => state.answersReducer.isDone);

  dispatch({
    type: 'SET_QUESTIONS',
    questions: [
      {
        title: 'EUA decidem invadir a Europa em ato de guerra sem precedentes',
        isTrue: false,
        links: [],
      },
      {
        title:
          'Pessoas da esquerda tendem a serem mais desonestas no mundo do trabalho',
        isTrue: false,
        links: [],
      },
      {
        title: 'Brasil é um dos piores países do mundo no combate à COVID-19',
        isTrue: true,
        links: [
          'https://noticias.uol.com.br/ultimas-noticias/afp/2020/06/13/brasil-e-o-segundo-pais-com-mais-mortes-pela-covid-19-que-nao-da-tregua-a-america-latina.htm',
          'https://g1.globo.com/bemestar/coronavirus/noticia/2020/08/10/brasil-tem-uma-das-piores-taxas-de-mortes-por-milhao-pela-covid-especialistas-dizem-que-comparacao-em-meio-a-pandemia-porem-nao-e-a-ideal.ghtml',
        ],
      },
    ],
  });

  return (
    <Container>
      <Navbar />
      <Header hasDone={isDone} />
      <PlayerScore score={score} />
    </Container>
  );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Topbar from './Topbar';
import Question from './Question';

function Challenge() {
  const history = useHistory();

  const [challengeQuestions, setChallengeQuestions] = useState([
    'EUA decidem invadir a Europa em ato de guerra sem precedentes',
    'Pessoas da esquerda tendem a serem mais desonestas no mundo do trabalho',
    'Brasil é o pior país do mundo no combate à COVID-19',
  ]);
  const [curQuestion, setCurQuestion] = useState(challengeQuestions[0]);
  const [curQstIndex, setCurQstIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [counter, setCounter] = useState(75);

  const nextQuestion = (answer) => {
    setAnswers((answrs) => [...answrs, answer]);
    setCurQstIndex((curIndex) => curIndex + 1);
  };

  useEffect(() => {
    if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    if (challengeQuestions[curQstIndex]) {
      setCurQuestion(challengeQuestions[curQstIndex]);
    } else history.push('/resultado');
  }, [curQstIndex]);

  return (
    <>
      <Topbar
        qstNum={`${curQstIndex + 1}/${challengeQuestions.length}`}
        secondsLeft={counter}
      />
      <Container>
        <Question
          qstText={curQuestion}
          btnAction={(answer) => {
            nextQuestion(answer);
          }}
        />
      </Container>
    </>
  );
}

export default Challenge;

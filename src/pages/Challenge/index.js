import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

import Topbar from './Topbar';
import Question from './Question';

function Challenge() {
  const dispatch = useDispatch();
  const history = useHistory();

  const questions = useSelector((state) => state.questionsReducer.questions);

  const [challengeQuestions] = useState(questions.map((v) => v.title));
  const [curQuestion, setCurQuestion] = useState(challengeQuestions[0]);
  const [curQstIndex, setCurQstIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(50);

  const goToResults = () => {
    dispatch({
      type: 'SET_SECONDS_LEFT',
      secondsLeft: secondsLeft,
    });
    dispatch({
      type: 'SET_DONE',
      isDone: true,
    });
    history.push('/resultado');
  };
  const nextQuestion = (answer) => {
    dispatch({
      type: 'SET_ANSWERS',
      answers: [...answers, answer],
    });
    setAnswers((answrs) => {
      return [...answrs, answer];
    });
    setCurQstIndex((curIndex) => curIndex + 1);
  };

  useEffect(() => {
    if (secondsLeft > 0) {
      setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    } else {
      goToResults();
    }
  }, [secondsLeft, goToResults]);

  useEffect(() => {
    if (challengeQuestions[curQstIndex]) {
      setCurQuestion(challengeQuestions[curQstIndex]);
    } else {
      goToResults();
    }
  }, [curQstIndex, challengeQuestions, history, goToResults]);

  return (
    <>
      <Topbar
        qstNum={`${curQstIndex + 1}/${challengeQuestions.length}`}
        secondsLeft={secondsLeft}
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

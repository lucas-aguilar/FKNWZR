import React /* , { useState, useEffect } */ from 'react';

import { Container } from './styles';
import Topbar from './Topbar';
import Question from './Question';

function Challenge() {
  // const [curQuestion, setCurQuestion] = useState({});
  // const [curQstIndex, setCurQstIndex] = useState(0);
  // const [challengeQuestions, setChallengeQuestions] = useState([]);

  // useEffect(() => {
  //   setChallengeQuestions(['']);
  // });

  return (
    <>
      <Topbar qstNum="6/10" timeLeft="0:29" />
      <Container>
        <Question
          qstText="EUA decidem invadir a Europa em ato de guerra sem precedentes"
          btnAction={(answer) => {
            console.log(answer);
          }}
        />
      </Container>
    </>
  );
}

export default Challenge;

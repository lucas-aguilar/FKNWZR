import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Status,
  Response,
  QuestionText,
  QuestionLinks,
} from './styles';

function Answer({ qstText, isFake, isCorrect, links }) {
  return (
    <Container isCorrect={isCorrect}>
      <Header>
        <Status isFake={isFake}>{isFake ? 'Fake' : 'Real'}</Status>
        <Response isCorrect={isCorrect}>
          {isCorrect ? 'Acertou' : 'Errou'}
        </Response>
      </Header>
      <QuestionText>{qstText}</QuestionText>
      {isFake ? '' : <QuestionLinks>Check links</QuestionLinks>}
    </Container>
  );
}

Answer.propTypes = {
  qstText: PropTypes.string.isRequired,
  isFake: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
};

export default Answer;

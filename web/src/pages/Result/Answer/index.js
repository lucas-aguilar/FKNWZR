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

function Answer({ qstText, isTrue, isCorrect, links }) {
  return (
    <Container isCorrect={isCorrect}>
      <Header>
        <Status isTrue={isTrue}>{isTrue ? 'Real' : 'Fake'}</Status>
        <Response isCorrect={isCorrect}>
          {isCorrect ? (
            <>
              Acertou <span>+10pts</span>
            </>
          ) : (
            <>
              Errou <span>-10pts</span>
            </>
          )}
        </Response>
      </Header>
      <QuestionText>{qstText}</QuestionText>
      {isTrue ? <QuestionLinks>Check links</QuestionLinks> : ''}
    </Container>
  );
}

Answer.propTypes = {
  qstText: PropTypes.string.isRequired,
  isTrue: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
};

export default Answer;

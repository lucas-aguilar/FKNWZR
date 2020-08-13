import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import { Container, QuestionContainer, BtnsContainer } from './styles';

function Question({ qstText, btnAction }) {
  return (
    <Container>
      <QuestionContainer className="no-select">{qstText}</QuestionContainer>
      <BtnsContainer>
        <Button
          variant="danger"
          onClick={() => {
            btnAction(false);
          }}
        >
          Fake
        </Button>
        <Button
          variant="success"
          onClick={() => {
            btnAction(true);
          }}
        >
          Real
        </Button>
      </BtnsContainer>
    </Container>
  );
}

Question.propTypes = {
  qstText: PropTypes.string.isRequired,
  btnAction: PropTypes.func.isRequired,
};

export default Question;

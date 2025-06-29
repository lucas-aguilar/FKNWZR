import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

import {
  Container,
  Header,
  Status,
  Response,
  QuestionText,
  QuestionLinks,
} from "./styles";

function Answer({ qstText, isTrue, isCorrect, links }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container isCorrect={isCorrect}>
        <Header>
          <Status isTrue={isTrue}>{isTrue ? "Real" : "Fake"}</Status>
          <Response isCorrect={isCorrect}>
            {isCorrect ? (
              <>
                Correct <span>+10pts</span>
              </>
            ) : (
              <>
                Wrong <span>-10pts</span>
              </>
            )}
          </Response>
        </Header>
        <QuestionText>{qstText}</QuestionText>
        {isTrue ? (
          <QuestionLinks onClick={handleShow}>Check source</QuestionLinks>
        ) : (
          ""
        )}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Source:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          <h3> {qstText} </h3>
          <ul>
            {links.length &&
              links.map((link, key) => (
                <li key={key}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

Answer.propTypes = {
  qstText: PropTypes.string.isRequired,
  isTrue: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
};

export default Answer;

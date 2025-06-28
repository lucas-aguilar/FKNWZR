import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container, TimeBonus } from "./styles";

import Answer from "./Answer";
import Header from "./Header";
import Score from "./Score";

import Navbar from "../../components/Navbar";

function Result() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questions = useSelector((state) => state.questionsReducer.questions);
  const answers = useSelector((state) => state.answersReducer.answers);
  const secondsLeft = useSelector((state) => state.answersReducer.secondsLeft);

  const getScore = () => {
    let scr = questions.reduce((acc, cur, idx) => {
      if (answers[idx] === cur.isTrue) return acc + 10;
      else return acc - 10;
    }, 0);
    if (scr > 0) {
      scr += Math.floor(secondsLeft / 10);
    } else {
      scr = 0;
    }
    dispatch({
      type: "SET_SCORE",
      score: scr,
    });
    return scr;
  };

  const [score] = React.useState(getScore());
  const [timeBonus] = React.useState(
    (() => {
      let score = questions.reduce((acc, cur, idx) => {
        if (answers[idx] === cur.isTrue) return acc + 10;
        else return acc - 10;
      }, 0);
      return score > 0 ? Math.floor(secondsLeft / 10) : 0;
    })()
  );

  const backClickAction = () => {
    navigate("/inicio");
  };

  React.useEffect(() => {
    if (
      !questions ||
      !questions.length ||
      !answers ||
      !answers.length ||
      !secondsLeft
    )
      navigate("/inicio");
  });

  return (
    <Container>
      <Navbar />
      <Header backClickAction={backClickAction} />
      <Score score={score} />
      {questions && questions.length
        ? questions.map((qst, qstIndex) => (
            <Answer
              key={qstIndex}
              qstText={qst.title}
              isTrue={qst.isTrue}
              isCorrect={answers[qstIndex] === qst.isTrue}
              links={qst.links}
            />
          ))
        : ""}
      {timeBonus && (
        <TimeBonus className="px-3">
          <b>
            Bônus por tempo: {secondsLeft} seg. = {timeBonus} pts
          </b>
        </TimeBonus>
      )}
    </Container>
  );
}

export default Result;

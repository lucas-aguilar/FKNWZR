import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../components/Navbar";

import Header from "./Header";
import PlayerScore from "./PlayerScore";
// import Ranking from './Ranking';

import questions from "../../questions";

import { Container } from "./styles";

function Dashboard() {
  const dispatch = useDispatch();

  const score = useSelector((state) => state.answersReducer.score);
  const isDone = useSelector((state) => state.answersReducer.isDone);

  dispatch({
    type: "SET_QUESTIONS",
    questions: questions.sort(() => Math.random() - 0.5),
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

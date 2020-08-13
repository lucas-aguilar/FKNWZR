export function setDone(isDone) {
  return {
    type: 'SET_DONE',
    isDone,
  };
}

export function setAnswers(answers) {
  return {
    type: 'SET_ANSWERS',
    answers,
  };
}

export function setSecondsLeft(secondsLeft) {
  return {
    type: 'SET_SECONDS_LEFT',
    secondsLeft,
  };
}

export function setSecondsLeft(score) {
  return {
    type: 'SET_SCORE',
    score,
  };
}

export function clearAnswers() {
  return {
    type: 'CLEAR_ANSWERS',
  };
}

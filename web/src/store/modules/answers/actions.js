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

export function clearAnswers() {
  return {
    type: 'CLEAR_ANSWERS',
  };
}

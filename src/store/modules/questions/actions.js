export function setQuestions(questions) {
  return {
    type: 'SET_QUESTIONS',
    questions,
  };
}

export function clearQuestions() {
  return {
    type: 'CLEAR_QUESTIONS',
  };
}

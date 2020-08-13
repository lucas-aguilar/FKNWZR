// import produce from 'immer';

const initialState = {
  answers: [],
  isDone: false,
  score: 0,
  secondsLeft: 0,
};

export default function answersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DONE':
      return { ...state, isDone: action.isDone };
    case 'SET_ANSWERS':
      return { ...state, answers: action.answers };
    case 'SET_SECONDS_LEFT':
      return { ...state, secondsLeft: action.secondsLeft };
    case 'SET_SCORE':
      return { ...state, score: action.score };
    case 'CLEAR_ANSWERS':
      return { ...state, answers: [] };
    default:
      return state;
  }
}

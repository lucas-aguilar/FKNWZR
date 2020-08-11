// import produce from 'immer';

const initialState = {
  answers: [],
  isDone: false,
};

export default function answersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DONE':
      return { ...state, answers: action.isDone };
    case 'SET_ANSWERS':
      return { ...state, answers: action.answers };
    case 'CLEAR_ANSWERS':
      return { ...state, answers: [] };
    default:
      return state;
  }
}

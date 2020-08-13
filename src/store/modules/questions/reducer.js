// import produce from 'immer';

const initialState = {
  questions: [],
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.questions };
    case 'CLEAR_QUESTIONS':
      return { ...state, questions: [] };
    default:
      return state;
  }
}

import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

// import resultReducer from './modules/result/reducer';
// const enhancer =
// process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer);
// const store = createStore(resultReducer);

export default store;

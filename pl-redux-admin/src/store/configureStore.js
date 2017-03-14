import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

function configureStore(initalState) {
  return createStore(
    rootReducer,
    initalState
  );
}

export default configureStore;
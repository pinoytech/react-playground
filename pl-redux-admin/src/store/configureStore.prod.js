import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

function configureStore(initalState) {
  return createStore(
    rootReducer,
    initalState,
    applyMiddleware(thunk)
  );
}

export default configureStore;
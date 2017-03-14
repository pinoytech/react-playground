import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';

function configureStore(initalState) {
  return createStore(
    rootReducer,
    initalState,
    applyMiddleware(reduxImmutableStateVariant())
  );
}

export default configureStore;
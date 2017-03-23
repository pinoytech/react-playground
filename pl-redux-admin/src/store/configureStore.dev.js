import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

function configureStore(initalState) {
  return createStore(
    rootReducer,
    initalState,
    applyMiddleware(thunk, reduxImmutableStateVariant())
  );
}

export default configureStore;
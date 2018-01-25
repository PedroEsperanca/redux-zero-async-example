import createStore from "redux-zero";
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

const initialState = { count: 1, loading: false, payload: {} };

const logger = (store) => (next) => (action) => {
  console.log('action name:', action.name);
  console.log('state:', store.getState());
  console.log('---');
  return next(action);
}

const middlewares = connect ? applyMiddleware(logger, connect(initialState)): [];
const store = createStore(initialState, middlewares);

export default store;
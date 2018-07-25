import { applyMiddleware, compose, createStore } from 'redux';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default compose(applyMiddleware(...middlewares))(createStore);

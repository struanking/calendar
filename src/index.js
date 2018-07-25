import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

const store = createStore(rootReducer);
store.dispatch({type: 'START', action: 'none'});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

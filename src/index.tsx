import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers/index'

import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();

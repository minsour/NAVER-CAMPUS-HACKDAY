import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myApp from './reducer/index';
let store = createStore(myApp);

ReactDom.render(
  <Provider store={store}>
    <Root />
  </Provider>
  , document.getElementById('root'));
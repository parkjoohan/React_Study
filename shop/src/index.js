import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let 기본state = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '멋진신발2', quan: 5 }
];

function reducer(state = 기본state, 액션) {
  if (액션.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else {
    return state
  }
}

let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

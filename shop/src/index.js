import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === 'alert닫기') {
    state = false;
    return state;
  } else {
    return state
  }

}

let 기본state = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '멋진신발2', quan: 5 }
];

function reducer(state = 기본state, 액션) {
  if (액션.type === '항목추가') {

    let found = state.findIndex((a) => {
      return a.id === 액션.데이터
    });

    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy;
      
    } else {
      let copy = [...state];
      copy.push(액션.데이터);
      return copy;
    }
    
  } else if (액션.type === '수량증가') {

    let copy = [...state];
    copy[액션.데이터].quan++;
    return copy

  } else if (액션.type === '수량감소') {

    let copy = [...state];
    copy[액션.데이터].quan--;
    return copy

  } else {
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}));


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

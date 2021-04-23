import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// actions 
const increment = ()=> {
  return {
    type: "INCREMENT"
  }
}

const decrement = ()=> {
  return {
    type: "DECREMENT"
  }
}

// reducers 
const Reducer = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state-1
  }
}
// dispatch 

const store = createStore(Reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

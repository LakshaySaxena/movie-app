import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import movies from './reducers';
import rootReducer from './reducers';

// function logger(obk, next, action)
// const logger = function ({ dispatch, getState }) {
// return function (next) {
// return function (action) {
// // middleware code
// console. log('ACTION_TYPE = ', action.type);
// next(action);
// }
// }
// }
// same logger() as above but a cleaner way, a function calling 2nd function, 2nd  function calling 3rd
const logger = ({ dispatch, getState }) => (next) => (action) => {
  // logger code
  //console. log('ACTION_TYPE = ', action.type);
  next (action) ;
}

//middleware as handleMovieSearch returns a function and not object
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   // logger code
//   if (typeof action === 'function') {
//   action(dispatch); 
//   return;
//   }
//   next (action);
//   }


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log("store", store);
// console.log("before state", store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman' , runtime: '7:00'}]
// });
// console.log("after state", store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

//Adding logger(Middleware)
//function(object,next,action)
// const logger=function ({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log("ACTION_TYPE=",action.type);
//       next(action);
//     }
//   }
// }
//It is same as above logger function the only thing is that we use implicit return to look nicer.
const logger=({dispatch,getState})=>(next)=>(action)=>{
  // console.log("ACTION_TYPE=",action.type);
  next(action);
}

// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   // console.log("ACTION_TYPE=",action.type);
//   if(typeof action==='function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log("Store",store);
// console.log("state",store.getState())
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:"Superman"}]
// })
console.log("state",store.getState())
export const StoreContext=createContext();
console.log("Store Context..",StoreContext);

class Provider extends React.Component{
  render(){
    const {store}=this.props;
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

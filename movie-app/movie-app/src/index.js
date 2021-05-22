import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
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
// export const StoreContext=createContext();
// console.log("Store Context..",StoreContext);

// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }

//const connectedAppComponent=connect(callback)(App);
// export function connect(callback){
//   return function (Component){
//      class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());  //It will update or refresh whenver the state changes
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const {store}=this.props;
//         const state=store.getState();
//         const dataToBePassedAsProps=callback(state);
//         return <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />; // we use 3 dot because of spreading properties it will pass as movie={movie} search={search}
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{     //why we doing these because our constructer wants access to the store
//       render(){
//         return(
//           <StoreContext.Consumer>
//             {(store)=><ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }

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

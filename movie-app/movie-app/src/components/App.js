import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import './App.css';
import {addMovies, setShowFavourite} from '../actions';
import { search } from '../reducers';
import {StoreContext} from '../index';

class App extends React.Component {
   componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log("UPDATED..");
      this.forceUpdate();
      console.log("New state",this.props.store.getState());
    })
    store.dispatch(addMovies(data));
   
    console.log("State",this.props.store.getState());
    
  }

  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();
    const index=movies.favourites.indexOf(movie);
    if(index!==-1){
      return true;
    }
    return false;
  }

onChangeTab(val){
  this.props.store.dispatch(setShowFavourite(val))
}
  render(){
  const {movies}=this.props.store.getState(); //our state {moives:{}, search:{}} 
  const {list,favourites,showFavourite}=movies;
  const displayMovies=showFavourite ? favourites:list;

  return (
    <div className="App">
      <Navbar/>
      <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite?'':'active-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourite?'active-tab':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="MoviesList">{displayMovies.map((movie,index)=>(
          <MovieCard 
          movie={movie} 
          key={`movies-${index}`} 
          dispatch={this.props.store.dispatch} 
          isFavourite={this.isMovieFavourite(movie)}
          />))}
          </div>
        {displayMovies.length===0?<div className="no-iteams">No iteams to display!!!</div>:null}
      </div>
    </div>
  );
  
  }
}

class AppWrapper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store)=> <App store={store}/>}
      </StoreContext.Consumer>
    );
  }
}
export default AppWrapper;

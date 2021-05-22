import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {connect} from 'react-redux';
import {data} from '../data';
import './App.css';
import {addMovies, setShowFavourite} from '../actions';
import { search } from '../reducers';

class App extends React.Component {
   componentDidMount(){
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite=(movie)=>{
    const {movies}=this.props;
    const index=movies.favourites.indexOf(movie);
    if(index!==-1){
      return true;
    }
    return false;
  }

onChangeTab(val){
  this.props.dispatch(setShowFavourite(val))
}
  render(){
  const {movies,search}=this.props; //our state {moives:{}, search:{}} 
  const {list,favourites,showFavourite}=movies;
  const displayMovies=showFavourite ? favourites:list;

  return (
    <div className="App">
      <Navbar dispatch={this.props.dispatch} search={search}/>
      <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite?'':'active-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourite?'active-tab':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="MoviesList">{displayMovies.map((movie,index)=>(
          <MovieCard 
          movie={movie} 
          key={`movies-${index}`} 
          dispatch={this.props.dispatch} 
          isFavourite={this.isMovieFavourite(movie)}
          />))}
          </div>
        {displayMovies.length===0?<div className="no-iteams">No iteams to display!!!</div>:null}
      </div>
    </div>
  );
  
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store)=> <App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search
  }
};
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;

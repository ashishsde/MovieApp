import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="MoviesList">{data.map((movie,index)=>(<MovieCard movie={movie} key={`movies-${index}`} />))}
          </div>
      </div>
    </div>
  );
}

export default App;

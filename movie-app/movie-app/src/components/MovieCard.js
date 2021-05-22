import React from 'react';
import { addFavourite, removeFavourite } from '../actions';
import './MovieCard.css';

class MovieCard extends React.Component{
    handleFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie));
    }
    handleunFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFavourite(movie));
    }
    render(){
        const { movie,isFavourite }=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Year}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button class="unfavourite-btn" onClick={this.handleunFavouriteClick}>Unfavourite</button>
                            : <button class="favourite-btn" onClick={this.handleFavouriteClick} >Favourite</button>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieCard;
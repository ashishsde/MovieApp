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
                    <img alt="Poster" src={movie.Img}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.price}</div>
                    <div className="footer">
                        <div className="rating">{movie.rating}</div>
                        {
                            isFavourite
                            ? <img alt="unfavourite" class="unfavourite" onClick={this.handleunFavouriteClick} src="https://thumbs.dreamstime.com/b/heart-cross-173286087.jpg"/>
                            : <img alt="favourite"  class="favourite" onClick={this.handleFavouriteClick} src="https://cdn.icon-icons.com/icons2/1325/PNG/512/caring4x_86993.png"/>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieCard;
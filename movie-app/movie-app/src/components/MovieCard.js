import React from 'react';
import './MovieCard.css';

class MovieCard extends React.Component{
    render(){
        const { movie }=this.props;
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
                        <img alt="favourite" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-TKr_s-lQLMOq8QP8bru0yVNIRB-TrXqWQ&usqp=CAU"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieCard;
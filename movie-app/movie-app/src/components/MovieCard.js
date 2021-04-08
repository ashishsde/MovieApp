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
                        <button className="favourite-btn"><img alt="favourite" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDw_IVE7yjFX-4JiUakbKK3EdYpaoW7WA9lg&usqp=CAU"/></button>
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieCard;
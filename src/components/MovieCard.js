import React from 'react';
import {addFavourites,remFav} from '../actions';



class MovieCard extends React.Component{

    addFav = ()=>{

        console.log("HIIII");

        const {movie} =this.props;
        this.props.dispatch(addFavourites(movie));
    }
    remFav = ()=>{
        console.log("BYEEEE");
        const {movie} =this.props;
        this.props.dispatch(remFav(movie));
    }
    render(){
        const {movie} =this.props;
    return (
        <div className="movie-card">
            <div className="left">
                <img alt="movie-poster" src={movie.Poster} />
            </div>

            <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {
                        this.props.isFavourite ? <button className="unfavourite-btn" onClick={this.remFav}>UnFavourite</button> : <button className="favourite-btn" onClick={this.addFav}>Favourite</button>  
                    }
                </div>
            </div>
            
        </div>

    );
}
}

export default MovieCard;
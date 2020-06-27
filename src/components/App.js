import React from 'react';
//data of movies
import {data} from '../data';

import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,showFavourites} from '../actions';


class App extends React.Component{


componentDidMount (){
  this.props.store.subscribe(() => {
    console.log("Updated");
    this.forceUpdate();
  });

  this.props.store.dispatch(addMovies(data));
  console.log("hi",this.props.store.getState());
}

isMovieFavourite = (movie) =>{
  const {movies} = this.props.store.getState();
  const {favourites} = movies;
  const index=favourites.indexOf(movie);
  if(index !== -1)
  {
      return true;
  }
    return false;
}
changeTab = (val) =>
{
  this.props.store.dispatch(showFavourites(val));
}

  render(){
  const {movies,search} = this.props.store.getState();
  const {list,favourites,showFavourites} =movies;
  const displayMovies = showFavourites ? favourites : list ;


  return (
    
    <div className="App">
      <Navbar search={search} dispatch={this.props.store.dispatch} />
      <div className = "main">
        <div className = "tabs">
          <div className = {`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.changeTab(false)}>Movies</div>
          <div className = {`tab ${showFavourites ? 'active-tabs' :''}`}  onClick={()=>this.changeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {displayMovies.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)} />
          ))}
        </div>
        {displayMovies.length === 0 ? <div className="no-movies">No movies to display </div> : null}
      </div>
    </div>
  );
}
}

export default App;
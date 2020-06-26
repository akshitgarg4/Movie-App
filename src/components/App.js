import React from 'react';
//data of movies
import {data} from '../data';

import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';


class App extends React.Component{


componentDidMount (){

 
  this.props.store.subscribe(() => {
    console.log("Updated");
    this.forceUpdate();
  });

  this.props.store.dispatch(addMovies(data));
  

  

  console.log("hi",this.props.store.getState());
}


  render(){
  const {list} = this.props.store.getState();

  return (
    
    <div className="App">
      <Navbar/>
      <div className = "main">
        <div className = "tabs">
          <div className = "tab">Movies</div>
          <div className = "tab">Favourites</div>
        </div>
        <div className="list">
          {list.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
}

export default App;
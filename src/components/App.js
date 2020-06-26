import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className = "main">
        <div className = "tabs">
          <div className = "tab">Movie</div>
          <div className = "tab">Favourites</div>
        </div>
        <div className="list">
          {data.map((movie)=>
            <MovieCard movie={movie} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
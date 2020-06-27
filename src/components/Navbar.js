import React from 'react';
import {addMoviesToList,handleMovieSearch } from '../actions';


class Navbar extends React.Component{
  constructor()
  {
    super()
    this.state={
      searhText:''
    }
  }
  handleAddToMovies =(movie) =>{
    this.props.dispatch(addMoviesToList(movie));
    this.setState({
      showSearchResults:false
    })
  }

  handleSearch =() =>{
    const {searchText} =this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  }
  handleChange=(e)=>{
    this.setState({
      searchText:e.target.value
    })
  }
    render(){
      const {showSearchResults,result}=this.props.search;
    return (
    <div className="nav">
      <div className="search-container">
          <input onChange={this.handleChange } />
          <button id="search-btn" onClick={this.handleSearch}>Search</button>
          {
            showSearchResults && 
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={ () => this.handleAddToMovies(result)}> ADD </button>
                </div>
              </div>
            </div>
          }
      </div>
    </div>
    );
} 
}

export default Navbar;
//action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const SHOW_FAVOURITES='SHOW_FAVOURITES';

export const REM_FAV='REM_FAV';
export const ADD_MOVIES_TO_LIST='ADD_MOVIES_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';





//action creators
export function addMovies(movies)
{
    return (
    {
        type : ADD_MOVIES,
        movies : movies
    });
    
  }

  export function addMoviesToList(movie)
  {
      return (
      {
          type : ADD_MOVIES_TO_LIST,
          movie : movie 
      });
      
    }

export function handleMovieSearch(text)
{
  const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${text}`;
  
  return function (dispatch)
  {
    fetch(url).then(response => response.json()).then(movie => {
      dispatch(addMovieSearchResult(movie))
    })
  }
}
export function addMovieSearchResult(movie)
{
  return {
    type:'ADD_SEARCH_RESULT',
    movie:movie
  }
}
export function addFavourites(movie)
  {
      return (
      {
          type : ADD_FAVOURITES,
          movies : movie
      });
      
    }
export function remFav(movie)
  {
      return (
      {
          type : REM_FAV,
          movie : movie
      });
      
    }
    export function showFavourites(val)
    {
        return (
        {
            type : SHOW_FAVOURITES,
            val : val
        });
        
      }
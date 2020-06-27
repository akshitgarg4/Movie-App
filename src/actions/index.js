//action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const REM_FAV='REM_FAV';




//action creators
export function addMovies(movies)
{
    return (
    {
        type : ADD_MOVIES,
        movies : movies
    });
    
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
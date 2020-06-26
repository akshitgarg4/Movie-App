//action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';



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
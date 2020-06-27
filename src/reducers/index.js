import {ADD_MOVIES,ADD_FAVOURITES,REM_FAV,SHOW_FAVOURITES} from '../actions';
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export default function movies(state=initialMovieState,action)
{
    //action will be js oblect that has movie to be added and type(compulsary)
    switch(action.type)
    {
        case ADD_MOVIES : return {
            ...state,list:action.movies
        }
        case ADD_FAVOURITES: return {
            ...state,favourites:[action.movies , ...state.favourites]
        }
        case REM_FAV :
            const filteredArray = state.favourites.filter(movie=> movie.Title !== action.movie.Title);
            return {...state,favourites:filteredArray};
        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites:action.val
            };
        default: return state;
    }

}
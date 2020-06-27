import {ADD_MOVIES,ADD_FAVOURITES,REM_FAV,SHOW_FAVOURITES} from '../actions';

//movies reducer
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialMovieState,action)
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
//search reducer
const initialSearchState={
    results:{}
}
export function search(state=initialSearchState,action)
{
    return state;
}



//root/main reducer
const initialRootState={
    movies:initialMovieState,
    search:initialSearchState
};
export default function rootReducer(state=initialRootState,action)
{
    return {
        movies : movies (state.movies,action),
        search : search (state.search,action)
    }
}

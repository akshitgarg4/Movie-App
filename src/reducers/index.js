import {ADD_MOVIES,ADD_FAVOURITES,REM_FAV,SHOW_FAVOURITES,ADD_SEARCH_RESULT,ADD_MOVIES_TO_LIST} from '../actions';

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
        case ADD_MOVIES_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            }
        default: return state;
    }

}
//search reducer
const initialSearchState={
    results:{},
    showSearchResults:false
}
export function search(state=initialSearchState,action)
{
    switch(action.type)
    {
    
        case ADD_MOVIES_TO_LIST:
            return {
                ...state,
                showSearchResults:false
            }
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                showSearchResults:true,
                result:action.movie
            }
        default: return state;
    }
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

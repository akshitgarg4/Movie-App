import {ADD_MOVIES,ADD_FAVOURITES} from '../actions';
const initialMovieState={
    list:[],
    favourites:[]
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
        default: return state;
    }

}
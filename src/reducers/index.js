import {ADD_MOVIES} from '../actions';
const initialMovieState={
    list:[],
    favourites:[]
}
export default function movies(state=initialMovieState,action)
{
    //action will be js oblect that has movie to be added and type(compulsary)
    if(action.type === ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movies
        }
    }
    return state;

}
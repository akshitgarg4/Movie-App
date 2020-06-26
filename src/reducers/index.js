export default function movies(state=[],action)
{
    //action will be js oblect that has movie to be added and type(compulsary)
    if(action.type === 'ADD_MOVIES')
    {
        return action.movies;
    }
    return state;

}
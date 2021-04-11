import {ADD_MOVIES} from '../actions';

const intialMoviesState={
    list:[],
    favourites:[]
}
export default function movies(state=intialMoviesState,action){
    if(action.type===ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}

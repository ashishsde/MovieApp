import {ADD_MOVIES ,ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES} from '../actions';

const intialMoviesState={
    list:[],
    favourites:[],
    showFavourite:false
}
export default function movies(state=intialMoviesState,action){
    // if(action.type===ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITE:
           const favouritearray=state.favourites.filter((movie)=>movie.Title!==action.movie.Title);
            return{
                ...state,
                favourites:favouritearray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourite:action.val
            }
        default :
            return state;
    }
}

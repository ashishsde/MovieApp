
import {ADD_MOVIES ,ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULT,ADD_MOVIE_TO_LIST} from '../actions';
import {combineReducers} from 'redux';
const intialMoviesState={
    list:[],
    favourites:[],
    showFavourite:false
}
export  function movies(state=intialMoviesState,action){ //MOVIE REDUCER
    console.log("movies reducer",)
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
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }
        default :
            return state;
    }
}
const intialSearchState={
    result:{},
    showSearchResults:false
}
export  function search(state=intialSearchState,action){ //SEARCH REDUCER
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResults:true
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                showSearchResults:false
            }
        default :
            return state;
    }
}
const intialRootState={
    movies:intialMoviesState,
    search:intialSearchState
}
// export default function rootReducer(state=intialRootState,action){
// return{
//     movies:movies(state.movies,action),
//     search:search(state.search,action)
// }  
// }

export default combineReducers({
    movies:movies,
    search:search
});
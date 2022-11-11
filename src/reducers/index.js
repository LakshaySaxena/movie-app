import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FAVOURITES,SET_SHOW_FAVOURITES} from '../actions/index'
import { combineReducers } from 'redux';

const initialMovieState={
    list: [],
    favourites: [],
    showFavourites: false
}
export  function movies( state =initialMovieState, action){
    console.log('MOVIE REDUCER');

if(action.type ===ADD_MOVIES){
    // ...state we picked whole initialMovieState object and then we updated value of list
    return { ...state, list: action.movies}; 
}
else if(action.type ===ADD_FAVOURITES){
    return { ...state, favourites: [action.movie, ...state.favourites]}; 
}
else if(action.type ===REMOVE_FAVOURITES){
    const filteredArray=state.favourites.filter
    (movie => movie.Title!==action.movie.Title);
    return { ...state, favourites:filteredArray} ; 
}
else if(action.type ===SET_SHOW_FAVOURITES){
    return { ...state, showFavourites:action.val}; 
}
return state;
}

const initialSearchState={
    result:{}
}
export function search(state={initialSearchState}, action){
    console.log('SEARCH REDUCER');
    return state;
}

const initialRootState = {
    movies: initialMovieState,
     search: initialSearchState
};

//   export default function rootReducer (state = initialRootState, action) {
//      return {
//       movies: movies(state.movies, action),
//       search: search(state.search, action)
//      }
//     }  

    export default combineReducers({
        movies,
        search
    });
import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FAVOURITES,SET_SHOW_FAVOURITES} from '../actions/index'

const initialMovieState={
    list: [],
    favourites: [],
    showFavourites: false
}
export default function movies( state =initialMovieState, action){
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


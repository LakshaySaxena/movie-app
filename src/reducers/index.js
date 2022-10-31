import {ADD_MOVIES} from '../actions/index'

const initialMovieState={
    list: [],
    favourites: []
}
export default function movies( state =initialMovieState, action){
if(action.type ===ADD_MOVIES){
    // ...state we picked whole initialMovieState object and then we updated value of list
    return { ...state, list: action.movies}; 
}
return state;
}


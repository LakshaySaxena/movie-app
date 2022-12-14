
// {
//     type: 'ADD_MOVIES';
//     movies :[m1,m2,m3];
// }
//action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

//action creator
export function addMovies(movies)
{
    return{ type : ADD_MOVIES, movies}
    
}

export function AddFavourites(movie)
{
    return{ type : ADD_FAVOURITES, movie}
    
}

export function RemoveFavourites(movie)
{
    return{ type : REMOVE_FAVOURITES, movie}
    
}
export function SetShowFavourites(val)
{
    return{ type : SET_SHOW_FAVOURITES, val}
    
}

export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }
export function handleMovieSearch(movie) {
   // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=205c172a&t=${movie}`;
    const url =`https://www.omdbapi.com/?i=tt3896198&apikey=144bd8d4&t=${movie}`;
    return function (dispatch) {
    fetch(url)
         .then((response) =>  response.json())
            .then((movie) => { console.log("movie", movie) 
        //dispatch an action to store the movie to the store
        dispatch(addMovieSearchResult(movie));
    });
     };
  }

  export function addMovieSearchResult(movie) {
    return {
      type: ADD_SEARCH_RESULT,
      movie,
    };
  }

// {
//     type: 'ADD_MOVIES';
//     movies :[m1,m2,m3];
// }
//action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

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

export function handleMovieSearch(movie) {
   // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=205c172a&t=${movie}`;
    const url =`http://www.omdbapi.com/?i=tt3896198&apikey=144bd8d4&t=${movie}`;
    return function (dispatch) {
    fetch(url)
         .then((response) =>  response.json())
            .then((movie) => { console.log("movie", movie) });

     };
  }
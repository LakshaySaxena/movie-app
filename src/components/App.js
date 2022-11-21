import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { connect } from "react-redux";
import { addMovies, SetShowFavourites } from '../actions/index';
import {StoreContext} from '../index'


class App extends React.Component {

 componentDidMount() {
    this.props.dispatch(addMovies(data));
  }
  isMovieFavourite= (movie) => {
    const { movies } = this.props;
    return movies.favourites.indexOf(movie) > -1;
  };
  onChangeTab = (val)=>{
    this.props.dispatch(SetShowFavourites(val))
  }
  render(){
    const { movies,search} =this.props; // { movies: {}, search: {}}
    const { list, favourites, showFavourites}= movies;
      console.log('RENDER:-', this.props);

  const displayMovie= showFavourites ? favourites: list;


  return (
    <div className="App">
    <Navbar search={search} />
    <div className="main">
      <div className="tabs">
        <div
          className={`tab ${showFavourites ? "" : "active-tabs"}`}
          onClick={() => this.onChangeTab(false)}
        >
          Movies
        </div>
        <div
          className={`tab ${showFavourites ? "active-tabs" : ""}`}
          onClick={() => this.onChangeTab(true)}
        >
          Favourites
        </div>
      </div>
      <div className="list">
        {displayMovie.map((movie, index) => (
          <MovieCard
            movie={movie}
            key={`movies-${index}`}
            dispatch={this.props.dispatch}
            isFavourite={this.isMovieFavourite(movie)}
          />
        ))}
      </div>
      {displayMovie.length === 0 ? (
        <div className="no-movies">No movies to display!! </div>
      ) : null}
    </div>
  </div>
);
}
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;
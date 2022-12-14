import { render } from "@testing-library/react";
import React from "react";
import { AddFavourites,RemoveFavourites } from "../actions";


class MovieCard extends React.Component {

    handleFavouriteClick =() =>{
        const {movie}= this.props;
        this.props.dispatch(AddFavourites(movie))
    }
    handleUnFavouriteClick=()=>{const {movie}= this.props;
    this.props.dispatch(RemoveFavourites(movie))
}
render()
{
    const {movie,isFavourite}= this.props;
    return (
        <div className="movie-card">
            <div className="left">
                <img alt="movie Property" src={movie.Poster}></img>
            </div>
            <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {
                        isFavourite
                        ?<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                        :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>

                    }
                </div>

            </div>
       </div>
      );
    }
}

 

export default MovieCard;

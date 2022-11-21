


import React from "react";
import { connect } from "react-redux";
import { handleMovieSearch, addMovieToList } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };
  handleChange = (e) => {
    
    this.setState({
      searchText: e.target.value,
      
    });
  };
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText))
  };
  
  
  render() {
    const { showSearchResults } = this.props.search;
    const { result } = this.props.search;

    //console.log("NAVBAR render result=> ", result);
    return (
      <div className="navbar">
        <div className="search-container">
        <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>Search</button>

         {showSearchResults && result.Response === "False" && (
            <div className="search-results">Movie Not Found!!</div>
          )}
          {showSearchResults && result.Response === "True" && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-result-pic" />

                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={() => this.handleAddToMovies(result)} >Add to Movies</button>
                </div>
              </div>
              
              </div>
          )}
        </div>
      </div>
    );
  }
}
// class NavbarWrapper extends React.Component {
//     render() {
//       return (
//         <StoreContext.Consumer>
//           {(store) => (
//             <Navbar dispatch={store.dispatch} search={this.props.search} />
//           )}
//         </StoreContext.Consumer>
//       );
//     }
//   }
function mapStateToProps({ search }) {
  return {
    search,
  };
}

  
  export default connect (mapStateToProps)(Navbar);
  
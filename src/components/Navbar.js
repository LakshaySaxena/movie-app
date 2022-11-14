// import { render } from "@testing-library/react";
// import React from "react";


// class Navbar extends React.Component {
// render()
// {
//     return (
//         <div className="nav">
//             <div className="search-container">
//                 <input />
//                 <button id="search-btn">Search</button>

//             </div>
//        </div>
//       );
//     }
// }

 

// export default Navbar;


import React from "react";

import { handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: "",
    };
  }
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText))
  };
  handleChange = (e) => {
    this.setState({
      seachText: e.target.value,
    });
  };
  
  render() {
    return (
      <div className="navbar">
        <div className="search-container">
        <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }

}
export default Navbar;

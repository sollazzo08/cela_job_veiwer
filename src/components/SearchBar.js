import React, { Component } from 'react'
import '../styles/style.css';
class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="searchbar">
          <form action="">Search
            <input type="text" placeholder="job keywords"/>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;

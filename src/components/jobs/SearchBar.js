import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../../styles/_searchBar.scss';


class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="searchBar_container">
          <div className="searchBar_content">
            <form action="">
              <div className="searchBar">
                <FontAwesomeIcon  className="icon" icon={faSearch}/>
                <input type="text" placeholder="Search Jobs"/>
              </div>
              <button className="search_btn">Search</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;

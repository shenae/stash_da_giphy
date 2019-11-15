import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="center">
            <div className="search-bar">
                <input
                    className="search-input"
                    placeholder="Search for gifs..."
                    type="text"
                    value={props.searchTerm}
                    onChange={props.updateSearchTerm}
                    onKeyDown={props.fetchGiphyData}/>
                
                <button
                    className="search-button"
                    type="button"
                    onClick={props.fetchGiphyData}>
                    SEARCH
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
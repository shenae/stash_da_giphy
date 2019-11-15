import React from 'react';
import classNames from 'classnames';

const Load = (props) => {
    return (
        <button 
            className="search-button"
            onClick={props.loadMore}>
            SEE MORE
        </button>
    )
}

export default Load;
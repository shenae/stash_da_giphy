import React from 'react';
import classNames from 'classnames';

const NoGifs = (props) => {
    return (
        <p className="no-result">
            {props.children}
        </p>
    )
}

export default NoGifs;
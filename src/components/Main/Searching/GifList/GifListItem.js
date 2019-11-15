import React from 'react';

const GifListItem = (props) => {
    const styles = {
        width: props.images.fixed_width.width + 'px',
        height: props.images.fixed_width.height + 'px'
      }
    return (
        <li 
            className={ props.isFavorited ? 'favorite' : '' }
            onClick={
                props.isFavorited ?
                () => props.removeFromFavorites(props) :
                () => props.addToFavorites(props) }        
            style={styles}    
                >
            <img 
                src={props.images.fixed_width.url}
                alt={props.title}
                />
        </li>
    )
}

export default GifListItem;
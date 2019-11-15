import React from 'react';
import { withRouter } from 'react-router-dom';
import GifListItem from './GifListItem';

const GifList = withRouter(props => {
    const isFavoritePage = props.location.pathname.includes('/favorites')
    let items

    if(isFavoritePage) {
        items = props.data.map((item) => {
            return (
                <GifListItem 
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    images={item.images}
                    isFavorited={true}
                    removeFromFavorites={props.removeFromFavorites}
                    />
            )
        })
    } else {
        items = props.data.map((item) => {
            const isFavorited = props.favorites.some( favorite => favorite.id === item.id)
    
            return (
                <GifListItem 
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    images={item.images}
                    isFavorited={isFavorited}
                    addToFavorites={props.addToFavorites}
                    removeFromFavorites={props.removeFromFavorites}
                    />
            )
        })
    }
    return (
        <ul className="list">
            {items}
        </ul>
    )
})

export default GifList;
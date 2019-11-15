import React from 'react';
import { Route } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import classNames from 'classnames';
import GifList from './GifList/GifList';
import NoGifs from './NoGifs';
import Load from './Load';

const Searching = (props) => {
    return (
        <section className="content">
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={() => 
                        props.searched && props.data.length === 0 ?
                            <NoGifs>
                                <div className="center">
                                <h3>
                                No gifs for that! Try again!
                                </h3>
                                <img src="https://media.giphy.com/media/1jaMdRq2QxdxGGMmWG/giphy-downsized.gif" />
                                </div>
                            </NoGifs> :
                            <div>
                                <GifList 
                                    data={props.data} 
                                    favorites={props.favorites} 
                                    addToFavorites={props.addToFavorites}
                                    removeFromFavorites={props.removeFromFavorites}
                                    />  

                                {props.hasMore && props.searchTerm === props.prevSearchTerm ?                 
                                   <Load loadMore={props.loadMore} /> : null} 
                            </div>}
                    
                    />
                <Route 
                    path="/favorites" 
                    render={() => 
                        props.favorites.length === 0 ? 
                            <NoGifs>
                                <div className="center">
                                <h3>What? You don't have any favorites Gifs?
                                <br />
                                <br />
                                <img src="https://media.giphy.com/media/27EhcDHnlkw1O/giphy.gif" />
                                <br />
                                <br />
                                Try another search!</h3>
                                </div>
                            </NoGifs> :
                            <GifList 
                                data={props.favorites} 
                                removeFromFavorites={props.removeFromFavorites}
                                />
                        } 
                    />             
            </Switch>      
        </section>
    )
}
export default Searching;
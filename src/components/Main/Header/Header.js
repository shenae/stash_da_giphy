import React from 'react';
import {Route} from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import stashLogo from '../../Assets/stashLogo.jpeg';
import giphyLogo from '../../Assets/giphyLogo.png';
import daLogo from '../../Assets/da.png';

const Header = (props) => {
    return (
        <section className="header">
            <div class="row">
                <div class="left">
                    <img src={stashLogo} alt="Stash logo"/>
                    </div>
                <div class="middle">
                    <img src={daLogo} alt="DA logo"/>
                    </div>
                <div class="right">
                    <img src={giphyLogo} alt="Giphy logo"/>
                    </div>
            </div>
            <NavBar />
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={() =>
                        <SearchBar
                            searchTerm={props.searchTerm}
                            updateSearchTerm={props.updateSearchTerm}
                            fetchGiphyData={props.fetchGiphyData}/>}
                    />
                <Route 
                    path="/favorites" 
                    render={() => 
                        <div className="center">
                            <h1>
                                🌈 Your Favorite Gifs 🦄
                            </h1>
                        </div>
                        } 
                    />
            </Switch>
        </section>
    )
}

export default Header;
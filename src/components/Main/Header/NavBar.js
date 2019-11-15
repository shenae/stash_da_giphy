import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <div className="center">
                <NavLink exact to="/" activeClassName="current">
                    <div className="icon">
                        <h1>Search 🔍</h1>
                    </div>
                </NavLink>

                <NavLink to="/favorites" activeClassName="current">
                    <div className="icon">
                        <h1>Faves 💜</h1>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
};

export default NavBar;
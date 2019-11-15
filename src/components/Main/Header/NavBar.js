import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <div className="center">
                <NavLink exact to="/" activeClassName="current">
                    <div className="icon">
                        <p className="nav-title">Search 🔍 </p>
                    </div>
                </NavLink>

                <NavLink to="/favorites" activeClassName="current">
                    <div className="icon">
                        <p className="nav-title">Faves 💜</p>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
};

export default NavBar;
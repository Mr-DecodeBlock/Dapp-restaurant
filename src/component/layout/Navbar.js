import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { GlobalContext } from '../../context/GlobalState';

const Navbar = () => {
    const { token, saveToken, logout } = useContext(GlobalContext);

    const [go] = useState(true);

    useEffect(() => {
        function findToken() {
            if(localStorage.jwtToken){
                saveToken(localStorage.jwtToken);
            }
        }
        
        findToken();

    }, [go, saveToken]);

    const UserLinks = (
        <>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link" to="/addrestaurant">Add Restaurant</Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link btn secondary-color" to="/" onClick={() => logout()}>Logout</Link>
            </li>
        </>
    );

    const GuestLinks = (
        <>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link btn primary-color" to="/register">Get Started</Link>
            </li>
        </>
    )

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="logo" src={Logo} alt="Logo" data-toggle="collapse" data-target=".navbar-collapse.show" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/deal">Deals</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/restaurant">Restaurant</Link>
                        </li>
                        { token ? UserLinks : GuestLinks }
                        
                        {/* <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/coin">Coin</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
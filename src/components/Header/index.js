import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Logo from './../../assets/img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <Link exact to="/">
                    <div className="logo">
                        <img src={Logo} alt="Brand Logo"/>
                    </div>
                    <span >BrandName</span>
                </Link>

                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import './styles.scss';
import Logo from './../../assets/img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Brand Logo"/>
                </div>
                <span >BrandName</span>
            </div>
        </header>
    );
}

export default Header;

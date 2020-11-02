import React from 'react';
import ShopMen from '../../assets/img/shopMens.jpg';
import ShopWomen from '../../assets/img/shopWomens.jpg';
import './styles.scss';

const Directory = () => {
    return (
        <div className="directory">
            <div className="wrap">
                <div 
                className="item"
                style={{
                    backgroundImage: `url(${ShopMen})`
                }}>
                    {/* eslint-disable-next-line */}
                    <a>
                        Shop Mens
                    </a>
                </div>
                <div 
                className="item"
                style={{
                    backgroundImage: `url(${ShopWomen})`
                }}>
                    {/* eslint-disable-next-line */}
                    <a >
                        Shop Womens
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Directory;

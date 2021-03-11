import React from 'react';
import CoverImg from '../../Photo/Rectangle 28.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='image'>
                <h1>SUPER CLUB'S</h1>
                <img src={CoverImg } alt=""/>
            </div>
        </div>
    );
};

export default Header;
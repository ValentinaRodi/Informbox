import React, { useState, useEffect } from 'react';
import './header.css';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
    const [popup, setPopup] = useState(false);
    
    const showMenu = () => {
        setPopup(!popup);
    };

    useEffect(() => {
        if(popup === true) {
            const handleClickOutside = (e) => {
                if (popup && !e.target.closest('.popup') && !e.target.closest('.nav__btn_mob')) {
                    setPopup(false);
                };
            };
        
            document.addEventListener('click', handleClickOutside);
        
            return () => {
              document.removeEventListener('click', handleClickOutside);
            };
        };
    }, [popup]);

    return (
        <div className="header" >
            <div className='header__info wrapper flex-center_between font-roboto'>
                <p className='header__text'>Empowering entreprenerus to launch their own trading systems.</p>
                <div className='info__tel flex-center_between'>
                    <button className="tel__btn flex-center">
                        <img src='/img/tel.svg' alt='telephone'/>
                    </button>
                    <p>8 888 888 88 88</p>
                </div>
            </div>
            <div className='header__menu flex-center_between wrapper'>
                <Link to="/" className='logo'>
                    <img src='/img/logo.svg' alt='logo'/>
                </Link>
                <div className='nav__block'>
                    <Nav />
                </div>
                <button onClick={showMenu} className='nav__btn_mob'>
                    {popup ?
                        <img src='/img/icons-close.svg' alt='menu close'/>
                        :
                        <img src='/img/symbols_menu.svg' alt='menu open'/>
                    }
                </button>
            </div>
            {popup ?
                <div className='popup'>
                    <Nav />
                </div>
                : null
            } 
        </div>
    );
};

export default Header;
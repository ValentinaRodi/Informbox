import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <nav className="flex-center_between nav">
            <Link to='#' className="nav__link nav__link_prim">Classic Brokerage MT4 | MT5</Link>
            <Link to='#' className="nav__link">Margin World Class Exchange</Link>
            <Link to='#' className="nav__link">Crypto World Class Exchange</Link>
            <Link to='#' className="nav__link">Financial Licensing</Link>
        </nav>
    );
};

export default Nav;
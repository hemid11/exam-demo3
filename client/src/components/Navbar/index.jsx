import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <Link to="/" className="logo">COLO<span>SHOP</span></Link>
                <ul>
                    <li><Link className='li' to="/">HOME</Link></li>
                    <li><Link className='li' to="/wishlist">WISHLIST</Link></li>
                    <li><Link className='li' to="/basket">BASKET</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
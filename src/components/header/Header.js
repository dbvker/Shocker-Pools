// React
import React from 'react';
import { Link } from "react-router-dom";

//CSS
import './Header.css';

//Import Assets
import logo from '../../assets/logo.png';

//Import Components
// import HeaderContact from './headerContact/HeaderContact';

const Header = () => {
    return (
        <div className='header-container'>
            {/* <HeaderContact /> */}
            <header>
                <div className='header-left'>
                    <Link to="/">
                        <img src={logo} className='logo' alt="Shocker Pools logo" />
                    </Link>
                </div>
                <div className='header-right'>
                    <nav>
                        <ul className='links'>
                            <li><Link to="/services/">Services</Link></li>
                            <li><Link to="/pools/">Pools</Link></li>
                            <li><Link to="/hot_tubs/">Hot Tubs</Link></li>
                            <li><Link to="/chemicals/">Chemicals</Link></li>
                            <li><Link to="/furniture/">Furniture</Link></li>
                            <li><Link to="/grills/">Grills</Link></li>   
                        </ul>
                        <ul className='action'>
                            <li><Link to="/register/">
                            <span className="action-span-small">Hello, stranger</span>
                                <span className="action-span-large">Account</span>
                            </Link></li>
                            {/* <li><Link to="/store/">
                                <span className="action-span-small">Store Location</span>
                                <span className="action-span-large">Get Directions</span>
                            </Link></li> */}
                        </ul>
                        
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;
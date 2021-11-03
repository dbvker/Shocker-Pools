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
            <div className='account-dropdown-container'>
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
                            <li><Link to="/register/">Account</Link></li>
                            <li><Link to="/store/">Store: East Wichita</Link></li>
                        </ul>
                        
                    </nav>
                </div>
            </header>
            </div>
        </div>
    );
}

export default Header;
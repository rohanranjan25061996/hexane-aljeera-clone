import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import DropdownNews from './DropdownNews';
import DropdownMore from './DropdownMore';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdownNews, setDropdownNews] = useState(false);
    const [dropdownMore, setDropdownMore] = useState(false);
    const [inputClick, setInputClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const handleInputClick = () => setInputClick(!inputClick);

    
    const onMouseEnterNews = () => {
        if (window.innerWidth < 960) {
            setDropdownNews(false);
        } else {
            setDropdownNews(true);
        }
    };

    const onMouseLeaveNews = () => {
        if (window.innerWidth < 960) {
            setDropdownNews(false);
        } else {
            setDropdownNews(false);
        }
    };
    const onMouseEnterMore = () => {
        if (window.innerWidth < 960) {
            setDropdownMore(false);
        } else {
            setDropdownMore(true);
        }
    };

    const onMouseLeaveMore = () => {
        if (window.innerWidth < 960) {
            setDropdownMore(false);
        } else {
            setDropdownMore(false);
        }
    };

    return (
        <>
            <header className='nav-header'>
                <nav className='navbar'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <div className='navbar-logo-div'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/31AIdoYz1sL.png' alt='logo' />          
                        </div>
                        <div>
                            <h1>ALJAZEERA</h1>
                        </div>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onMouseEnter={onMouseEnterNews} onMouseLeave={onMouseLeaveNews}>
                            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                            News <i className='fas fa-caret-down' />
                            </Link>
                            {
                                dropdownNews && <DropdownNews/>
                            }
                        </li>
                        <li className='nav-item'>
                            <Link to='/corona' className='nav-links' onClick={closeMobileMenu}>
                            Coronavirus
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
                            Features
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/economy' className='nav-links' onClick={closeMobileMenu}>
                            Economy
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/opinion' className='nav-links' onClick={closeMobileMenu}>
                            Opinion
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/video' className='nav-links' onClick={closeMobileMenu}>
                            Video
                            </Link>
                        </li>
                        <li className='nav-item'onMouseEnter={onMouseEnterMore} onMouseLeave={onMouseLeaveMore}>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            More <i className='fas fa-caret-down' />
                            </Link>
                            {
                                dropdownMore && <DropdownMore/>
                            }
                        </li>
                    </ul>
                    <div className='nav-btn'>
                        <Link to='/live' className='nav-lnks'>
                            <button>
                                <i class="fas fa-play-circle"></i>
                                LIVE
                            </button>
                        </Link>
                        <Link to='/' className='nav-lnks'>
                            <button onClick={handleInputClick}>
                                <i class="fas fa-search"></i>
                            </button>
                        </Link>                   
                    </div>
                </nav>
                <div className={inputClick ? "input-nav" : "input-none"}>
                    <div className='input-box'>
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search" />
                        <button>Search</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;
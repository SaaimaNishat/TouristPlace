import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './NavBar.css'

function NavBar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false)
        }
        else
        {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return(
        <>
     <nav className="navbar">
         <div className="navbar-container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                TRAVELISTA
                <i class="fab fa-typo3"></i>
            </Link>
         <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
            </li>
            <li className='nav-item'>
                <Link to='/list' className='nav-links' onClick={closeMobileMenu}>LIST</Link>
            </li>
            <li className='nav-item'>
                <Link to='/famous' className='nav-links' onClick={closeMobileMenu}>FAMOUS</Link>
            </li>
         </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
         </div>
     </nav>
     </>
    );
}

export default NavBar;
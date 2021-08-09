import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(){
    const [click, setClick] = useState(false);
    const [user, setUser] = useState('LOGIN');
    
    //const [load, setLoad] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //const loadBarSet = ({prop}) => setLoad(prop)


    

    useEffect(() => {
        localStorage.clear();
        setUser('LOGIN')
    }, [])    


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
                <Link to='/post' className='nav-links' onClick={closeMobileMenu}>POST</Link>
            </li>

            <li className='nav-item'>
                <Link to='/login' className='nav-links' onClick={closeMobileMenu}>{user}</Link>
            </li>

         </ul>
            </div>
     </nav>
         
     </>
    );
}

export default NavBar;
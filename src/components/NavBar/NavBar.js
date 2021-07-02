import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../Button/Button';
import './NavBar.css'
import { useHistory } from "react-router-dom";

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

    let history = useHistory();

    const SignUpPage = () => {
        
        history.push("/signup");
        return <Redirect to='/signup' />
    }

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
                <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>SIGNUP</Link>
            </li>

            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>LOGIN</Link>
            </li>
         </ul>
            {/* {button && <Button onClick={() => {this.props.history.push('/signup')}} buttonStyle='btn--outline'>SIGN UP</Button>} */}
         </div>
     </nav>
     </>
    );
}

export default NavBar;
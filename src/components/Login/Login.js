import React from 'react'
import {Link} from 'react-router-dom'

function Login(){
    return(
        <>
                <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
            crossorigin="anonymous"></script>

            <div className="form-container">
            <h1 className="heading-signup">SIGN IN</h1>
            <p className="heading-signup">Sign into TOURISTA</p>

            <form className="text-center signup-form" onsubmit="event.preventDefault(); console.log('SUCCESS!')">
                <input required type="email" id="useremailInput" className="form-control mb-4" placeholder="Email" />
                <input required type="password" id="passwordInput" className="form-control mb-4" placeholder="Password" />
                <button className="btn btn-info btn-block my-4" id="submitBtn" type="submit">SIGN IN</button>
            </form>
            
            <ul className='sing-in-inline'>
            <ul className='nav-item'>
            <Link to='/signup' className='nav-links'>CREATE A NEW ACCOUNT</Link>
            </ul>
            <ul className='nav-item'>
            <Link to='/signup' className='nav-links'>FORGOT PASSWORD</Link>
            </ul>
            </ul>
            </div>
        </>

    );
}

export default Login;
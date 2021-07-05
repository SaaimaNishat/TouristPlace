import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import { api_url } from '../../base'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const emailChangeHandler = e => setEmail(e.target.value)
    const passwordChangeHandler = e => setPassword(e.target.value)

    const login = (e) => {
        e.preventDefault();

        localStorage.clear();
        console.log(email, password)
        axios.post(api_url + 'user/login', {"email": email, "password": password}).then(
            res => {
                alert("You are now logged in")
                localStorage.setItem('loggedin', true);
                localStorage.setItem('user',res.data[0].userName)
            }
        ).catch(err => {
            alert("Credentials do not match. Forgot password will be implemented soon.")
        })
    }
    return(
        <>

            <div className="form-container">
            <h1 className="heading-signup">SIGN IN</h1>
            <p className="heading-signup">Sign into TOURISTA</p>

            <form className="text-center signup-form" onSubmit={login}>
                <input onChange={emailChangeHandler} required type="email" id="useremailInput" className="form-control mb-4" placeholder="Email" />
                <input onChange={passwordChangeHandler} required type="password" id="passwordInput" className="form-control mb-4" placeholder="Password" />
                <button className="btn btn-info btn-block my-4" id="submitBtn" type="submit">SIGN IN</button>
            </form>
            
            <ul className='sing-in-inline'>
            <ul className='nav-item'>
            <Link to='/signup' className='nav-links'>CREATE A NEW ACCOUNT</Link>
            </ul>
            </ul>
            </div>
        </>

    );
}

export default Login;
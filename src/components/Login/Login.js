import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { api_url } from '../../base'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const emailChangeHandler = e => setEmail(e.target.value)
    const passwordChangeHandler = e => setPassword(e.target.value)

    let history = useHistory();

    const login = (e) => {
        e.preventDefault();
        setLoading(true)

        localStorage.clear();
        console.log(email, password)
        axios.post(api_url + 'user/login', {"email": email, "password": password}).then(
            res => {
                localStorage.setItem('loggedin', true);
                localStorage.setItem('user',res.data[0].userName)
                history.push('/')
                setLoading(false);
            }
        ).catch(err => {
            setLoading(false)
            alert("Credentials do not match. Forgot password will be implemented soon.")
        })
    }

    return(
        <>

            <div className="form-container">
            <h1 className="heading-signup">SIGN IN</h1>
            <p className="heading-signup">Sign into TOURISTA</p>

            <div className={loading ? "loading-bar" : "loading-bar-hide"}>
                Signing In
            </div>
            

            <form className="text-center signup-form" onSubmit={login}>
                <input onChange={emailChangeHandler} required type="email" id="useremailInput" className="form-control mb-4" placeholder="Email" />
                <input onChange={passwordChangeHandler} required type="password" id="passwordInput" className="form-control mb-4" placeholder="Password" />
                <button className="btn btn-info btn-block my-4" onClick={loading} id="submitBtn" type="submit">SIGN IN</button>
            </form>
            
            <ul className='sing-in-inline'>
            <nav className="login-bar">
                <ul className='nav-item'>
                <Link to='/signup' className='nav-links'>CREATE A NEW ACCOUNT</Link>
                </ul>
                <ul className='nav-item'>
            <Link to='/signup' className='nav-links'>FORGOT PASSWORD</Link>
            </ul>
            </nav>
            
            </ul>
            </div>
        </>

    );
}

export default Login;
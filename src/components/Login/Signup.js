import React, { useState } from 'react'
import axios from 'axios'
import './Signup.css'

import { api_url } from '../../base'

function Signup(){
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const emailChangeHandler = (e) => setEmail(e.target.value)
    const userNameChangeHandler = (e) => setUserName(e.target.value)
    const passwordChangeHandler = (e) => setPassword(e.target.value)

    const addUser = e => {
        e.preventDefault();
        axios.post(api_url+ 'user/addUser', {"email": email, "userName": userName, "password": password}).then(
            res => {
                alert("User added")
            }
        ).catch(err => {
            if(err.type === 'Conflict')
                alert("User already Exist.")
            alert("User already Exist in Database. Forgot password option will be made available soon.")
        })
    }

    return(
        <>

            <div className="form-container">
            <h1 className="heading-signup">SIGN UP</h1>
            <p className="heading-signup">Register yourself to get exclusive acces to TOURISTA</p>


            <form className="text-center signup-form" onSubmit={addUser}>
                <input onChange={emailChangeHandler} required type="email" id="useremailInput" className="form-control mb-4" placeholder="Email" />
                <input onChange={userNameChangeHandler} required type="text" id="usernameInput" className="form-control mb-4" placeholder="Name" />
                <input onChange={passwordChangeHandler} required type="password" id="passwordInput" className="form-control mb-4 input-listener" placeholder="Password" />
                <button type='submit'>Submit</button>
            </form>

            </div>
        </>
    );
}

export default Signup;
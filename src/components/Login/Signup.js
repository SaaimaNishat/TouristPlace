import React from 'react'
import checkValidity from './script'
import './Signup.css'

function Signup(){
    return(
        <>
        <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
            crossorigin="anonymous"></script>

            <div className="form-container">
            <h1 className="heading-signup">SIGN UP</h1>
            <p className="heading-signup">Register yourself to get exclusive acces to TOURISTA</p>

            {/* <div className="password-requirements">
                <h5 className="requirements-header heading-signup">Password Requirements:</h5>

                <div id="numberRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                &nbsp;Contains at least 1 number
                </div>
                <div id="lengthRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                &nbsp;Contains at least 8 characters
                </div>
                <div id="lowerCaseRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                &nbsp;Contains at least 1 lower case letter
                </div>
                <div id="upperCaseRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                &nbsp;Contains at least 1 upper case letter
                </div>
                <div id="specialCharacterRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                &nbsp;Contains at least 1 of the following characters: @, #, $, %, ^, &, *
                </div>
                <div id="passwordsMatchRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                &nbsp;Passwords must match
                </div>
            </div> */}

            <form className="text-center signup-form" onsubmit="event.preventDefault(); console.log('SUCCESS!')">
                <input required type="email" id="useremailInput" className="form-control mb-4" placeholder="Email" />
                <input required type="text" id="usernameInput" className="form-control mb-4" placeholder="Name" />
                <input required type="password" id="passwordInput" className="form-control mb-4 input-listener" placeholder="Password" />
                <input required type="password" id="confirmPasswordInput" className="form-control mb-4 input-listener" placeholder="Confirm Password" />
                <button className="btn btn-info btn-block my-4" id="submitBtn" type="submit">Sign Up</button>
            </form>

            </div>
            <script
         src='./script.js'></script>
        </>
    );
}

export default Signup;
import React from 'react'
import './script'
import './style.css'

function Signup(){
    return(
        <>
        <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
            crossorigin="anonymous"></script>

            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
            <div className="form-container">
            <h1>SIGN UP</h1>

            <div className="password-requirements">
                <h5 className="requirements-header">Password Requirements:</h5>

                <div id="numberRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                Contains at least 1 number
                </div>
                <div id="lengthRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                Contains at least 8 characters
                </div>
                <div id="lowerCaseRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                Contains at least 1 lower case letter
                </div>
                <div id="upperCaseRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                Contains at least 1 upper case letter
                </div>
                <div id="specialCharacterRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                Contains at least 1 of the following characters: @, #, $, %, ^, &, *
                </div>
                <div id="passwordsMatchRequirement" className="requirement">
                <div className="fulfilled-symbol"></div>
                Passwords must match
                </div>
            </div>

            <form className="text-center border border-light p-5" onsubmit="event.preventDefault(); console.log('SUCCESS!')">
                <input required type="email" id="usernameInput" className="form-control mb-4" placeholder="Email" />
                <input required type="password" id="passwordInput" className="form-control mb-4 input-listener" placeholder="Password" />
                <input required type="password" id="confirmPasswordInput" className="form-control mb-4 input-listener" placeholder="Confirm Password" />
                <button disabled className="btn btn-info btn-block my-4" id="submitBtn" type="submit">Sign In</button>
            </form>

            </div>
            <script
         src='./script.js'></script>
        </>
    );
}

export default Signup;
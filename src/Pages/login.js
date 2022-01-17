import React from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import Logo from "../Images/logo.jpeg"
import { Link } from "react-router-dom";
import "../Style/login.css"
import login from "../Images/login-remove.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlesubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            {/* <div>
                <NavBar />
            </div> */}
            <div className="main-login bg-light">
                <div className="login-conatiner bg-light">
                    <div className="left-side">
                        <div className="img-className">
                            <img style={{ height: '150px', width: '300px' }} src={Logo} />
                        </div>
                        <form onSubmit={handlesubmit}>
                            <div className="Form_Title"> Sign In</div>
                            <div >
                                <label className="form-label"></label>
                                <input  type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Your Email" required/>
                            </div>
                            <div >
                                <label  className="form-label"></label>
                                <input  minlength="8" type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" id="button" required />
                            </div>
                            <button type="submit" className="btn" >Sign In</button>
                        </form>
                        <div>
                            <p id="social-text" style={{ alignitems: "center" }}> or sign in with</p>
                            <div id="social-media">
                                <a href="https://www.facebook.com"
                                    className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.twitter.com" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="https://www.instagram.com"
                                    className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                            <div className="footerform " style={{ color: "var(--first_color)", fontSize: '5px', paddingTop: '15px' }}>
                                <h5>Dont Have an Account ? <Link id ="linkform" to='/signup'> Register Now </Link> </h5>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="welcomeNote" id="welcomeNote">
                            <h1>
                                Welcome Back
                            </h1>
                        </div>
                        <div className="welcomeImg">
                            <img id="loginImg" src={login}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}


export default Login;
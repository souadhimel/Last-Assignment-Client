import React, { useState } from 'react';
import auth from '../../Firebase/firebase.init';
import { FcGoogle } from "react-icons/fc";
import {useAuthState ,  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignOut from '../SignOut/SignOut';
import "./Login.css";



const Login = () => {
    const [user]=useAuthState(auth);
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")
    const[error,setError]=useState(" ")
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location=useLocation()
    const  from = location.state?.from?.pathname || "/";
   
// log in with email and password
  
    const handleEmailBlur=(e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur=(e) => {
        setPassword(e.target.value)
    }
    
    if (user) {
        navigate(from, {replace: true})
    }
 
    const handleUserSignIn=(e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)

        if (password.length<6) {
            setError('Your password must be at least 6 characters or more')
            return;
        }
    }
    

// google sign in
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div className="form_container">
        <div>
            <h2 className="form_title">Login</h2>
            <form onSubmit={handleUserSignIn} >
            
            <div className="input_group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
            
            <div className="input_group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id=""  required/>
            </div>
            
            <p style={{ color :"red" }}>{error?.message}</p>
            
            <div >
                <input className="form_submit" type="submit" value="Login" />
            </div>
            </form>
            <div className="form_text">
            <p>New to Car Biz? <Link className="form_link" to="/register">Create a new account</Link></p>
            
            </div>

            <div className="divider">
        <div className="divider_line"></div><p>or</p>
        <div className="divider_line"></div>
        </div>
            <div >
                {
                    user? <SignOut></SignOut>:
                    <button onClick={()=>signInWithGoogle()} className="form_submit_google" ><FcGoogle></FcGoogle>  Continue with Google</button>
                    
                }
               
            </div>
            
        </div>
    </div>
    );
};

export default Login;
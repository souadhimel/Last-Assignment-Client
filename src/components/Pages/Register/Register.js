import React from 'react';
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared Pages/Loading/Loading';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token]  = useToken(user || gUser);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    // if (token) {
    //     navigate('/appointment');
    // }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        
    }


    return (
        <div className="form_container">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="input_group">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="input_group">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="input_group">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    {signInError}
                    <input className='form_submit' type="submit" value="Sign Up" />
                </form>
              <div className="form_text" >  <p><small>Already have an account? <Link className='text-primary' to="/login">Please login</Link></small></p></div>
                <div className="divider">
               <div className="divider_line"></div><p>or</p>
               <div className="divider_line"></div>
               </div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="form_submit_google"
                >Continue with Google<FcGoogle></FcGoogle></button>
            </div>
        </div>
    </div >
    );
};

export default Register;










// import React from 'react';
// import "./Register.css"
// import  { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../../Firebase/firebase.init';

// const Register = () => {
// const [email,setEmail]=useState(' ')
// const [password,setPassword]=useState(' ')
// const [confirmPassword,setConfirmPassword]=useState(' ')
// const [error,setError]=useState(' ')
// const navigate= useNavigate()
// const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true})


// // Email & password authentication
// const handleEmailBlur=(e) => {
// setEmail(e.target.value)
// }
// const handlePasswordBlur=(e) => {
// setPassword(e.target.value)
// }
// const handleConfirmPasswordBlur=(e) => {
// setConfirmPassword(e.target.value)
// }

// if (user) {
//    navigate('/home') 
// }

// const handleCreateUser=(e) => {
//     e.preventDefault();
//     if(password !==confirmPassword){
//         setError('Your two passwords did not match!!')
//         return;
//     }
//     if(password.length<6){
//         setError('Your Password must be at least 6 characters or longer!!')
//         return;
//     }
//     createUserWithEmailAndPassword(email, password)
// }



//     return (
//         <div className="form_container">
//         <div>
//             <h2 className="form_title">Sign Up</h2>
//             <form onSubmit={handleCreateUser} >
            
//             <div className="input_group">
//             <label htmlFor="email">Email</label>
//             <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
//             </div>
            
//             <div className="input_group">
//             <label htmlFor="password">Password</label>
//             <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
//             </div>
            
//             <div className="input_group">
//             <label htmlFor="password">Confirm Password</label>
//             <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required/>
//             </div>
//             <p style={{ color: 'red'}}>
//                 {error }
//             </p>
//             <div >
//                 <input className="form_submit" type="submit" value="Sign up" />
//             </div>
//             </form>
//             <div className="form_text"><p>Already have an account? <Link className="form_link" to="/login">Login</Link></p></div>
//             <div className="divider">
//             <div className="divider_line"></div><p>or</p>
//             <div className="divider_line"></div>
//             </div>
//             <div >
//                 <button className="form_submit_google" ><FcGoogle></FcGoogle>  Continue with Google</button>
               
//             </div>
           
//         </div>
//     </div>
//     );
// };

// export default Register;
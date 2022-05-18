import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2 ml-5">
                    <h1 className="text-5xl font-bold">Sign In</h1>
                    <p className="py-6">
                        Welcome back!!We missed you Please Login
                    </p>
                    <p>
                        New In? <Link to='/signup' className='font-bold text-success' >Sign Now!!</Link>
                    </p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/forgotten' className='text-error'>Forgotten Password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Sign Up' className="btn btn-primary" />
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
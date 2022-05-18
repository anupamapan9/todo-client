import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';

const Forgotten = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const handelResetPass = e => {
        e.preventDefault()
        const email = e.target.email
        sendPasswordResetEmail(email)
        e.target.reset()
    }
    if (sending) {
        return <Loading />
    }
    if (error) {
        toast.error(error.message)
    }
    return (
        <div className='flex justify-center mt-10' >
            <form onSubmit={handelResetPass}>
                <h2 className='text-3xl font-extrabold'>Get Reset Link</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value='Reset Password' className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default Forgotten;
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    let signUpError;
    const navigate = useNavigate()

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        signUpError = <p className='text-red-500 mb-4'><small>{error?.message || googleError?.message}</small></p>
    }
    if (user || googleUser) {
        console.log(user);
    }
    const onSubmit = data => {


        if (data.password === data.confirmPassword) {
            createUserWithEmailAndPassword(data.email, data.password);
            navigate('/')
        }
        else {
            alert('Please Provide the same password')
        }


    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-xl">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
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
                                        message: 'Name is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
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
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or more '
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: 'Re-type Your Password'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be matched '
                                    }
                                })} />
                            <label className="label">
                                {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                                {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                            </label>
                        </div>
                        {signUpError}

                        <input className='btn  w-full max-w-xs text-white bg-secondary' type="submit" value='Sign Up' />
                    </form>
                    <p className='text-center'><small>Already have an account? <Link className='text-red-500' to='/login'>Please Login</Link></small></p>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline bg-primary">Continue With Google
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
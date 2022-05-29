import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';




const MyProfile = () => {

    const [user] = useAuthState(auth);





    return (
        <div>
            <div>
                <h2>{user.email}</h2>
                <h2>{user.displayName}</h2>

            </div>


            <div>
                <div>
                    <h2 className='text-center text-blue-400 text-2xl mb-4'>Please Update Your Profile </h2>
                    <div className='flex justify-center items-center'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center font-bold text-xl">Profile Update</h2>
                                <form >
                                    <input type="text" name="education" placeholder='Last Education Status' required className='input input-bordered w-full max-w-xs mb-2' />
                                    <input type="text" name="location" placeholder='Your City' required className='input input-bordered w-full max-w-xs mb-2 ' />
                                    <input type="text" name="phoneNumber" placeholder='Your Phone/Mobile No.' required className='input input-bordered w-full max-w-xs mb-2' />
                                    <input type="text" name="linkedIn" placeholder='Your Linked In Profile' required className='input input-bordered w-full max-w-xs mb-2' />
                                    <input type="text" name="name" className='input input-bordered w-full max-w-xs mb-2' />
                                    <input type="email" name="email" className='input input-bordered w-full max-w-xs mb-2' />
                                    <input type="submit" value="Update" className='input input-bordered btn btn-primary w-full max-w-xs mb-2' />
                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyProfile;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)

    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile sticky top-0 ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl mt-8 mb-6 text-center font-bold text-green-500'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My profile</Link></li>

                    {!admin && <>
                        <li><Link to='/dashboard/review'>Add A Review</Link></li>
                        <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                    </>}

                    {admin && <>
                        <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                        <li><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
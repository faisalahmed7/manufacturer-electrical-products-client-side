import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://obscure-spire-95539.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {

                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            }
            )
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast('Successfully Made an Admin')
                }


            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs bg-green-500 border-0 text-white '>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;
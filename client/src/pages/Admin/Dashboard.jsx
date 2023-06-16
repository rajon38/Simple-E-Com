import React from 'react';
import AdminMenu from "../../Components/AdminMenu";
import {useAuth} from "../../context/auth";

const AdminDashboard = () => {
    // context
    const [auth, setAuth] = useAuth();
    return (
        <div className="container m-10">
            <div className="w-1/5">
                <AdminMenu/>
            </div>
            <div className='w-5/6'>
                <div className="flex flex-col text-center w-full mb-20 ml-20 space-y-2">
                    <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">User Information</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">{auth?.user?.name}</h1>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">{auth?.user?.email}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default AdminDashboard;
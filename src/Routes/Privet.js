import React, { useContext } from 'react';



import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Priviteroutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)

    const location = useLocation()

    if (loader) {
        return <div>
            <h1 className='text-center text-2xl font-bold'>loading.......</h1>
        </div>
    }
    if (user?.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default Priviteroutes;
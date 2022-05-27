import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared Pages/Loading/Loading';
import auth from './firebase.init';


const RequireAuth = ({children}) => {
    const [user,loading]=useAuthState(auth)
    console.log('inside req auth', user);
    const location=useLocation();
    if (loading) {
        return <Loading></Loading>
        
    }
    if (!user) {
        return<Navigate to="/login" state={{from: location}} replace/>
    }
    return children;
};

export default RequireAuth;
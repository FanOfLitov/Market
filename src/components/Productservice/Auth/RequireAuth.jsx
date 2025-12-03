import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children, redirectTo = '/login' }) => {
    const location = useLocation();
    const token = localStorage.getItem('jwtToken');

    if (!token) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
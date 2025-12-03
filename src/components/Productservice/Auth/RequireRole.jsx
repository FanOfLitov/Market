import React from 'react';
import { Navigate } from 'react-router-dom';
import { getRolesFromToken } from '../../../utils/jwt';  // Исправленный путь

const RequireRole = ({ children, anyOf = [] }) => {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
        return <Navigate to="/" replace />;
    }

    const roles = getRolesFromToken(token);
    const hasRequiredRole = anyOf.some(role => roles.includes(role));

    if (!hasRequiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RequireRole;
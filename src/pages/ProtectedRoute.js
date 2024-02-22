import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = () => {
    // Implement your logic here, e.g., check localStorage for an auth token
    return localStorage.getItem('isAuthenticated');
  };

  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

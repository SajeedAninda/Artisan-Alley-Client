"use client"
import React, { useContext } from 'react';
import { AuthContext } from '@/components/Authentication/AuthProvider';

const useAuth = () => {
    let auth = useContext(AuthContext)
    return auth;
};

export default useAuth;
import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Indexpage from '../pages/Indexpage/Indexpage';
import Signuppage from '../pages/Signuppage/Signuppage';
import Loginpage from '../pages/Loginpage/Loginpage';
import Nopage from '../pages/Nopage/Nopage';
import LeanMorePage from '../pages/Learnmorepage/LeanMorePage';
import VerifyOTPPage from '../pages/VerifyOTPPage/VerifyOTPPage';
import { userControllerStore } from '../store/userControllerStore';
import Homepage from '../pages/Homepage/Homepage';

function Router() {

    const { authUser } = userControllerStore()

    return (
        <Routes>
            <Route path="/" element={<Indexpage />} />
            <Route path="/learnmore" element={<LeanMorePage />} />
            <Route path="/signup" element={!authUser ? <Signuppage /> : <Navigate to={"/home"} />} />
            <Route path="/login" element={!authUser ? <Loginpage /> : <Navigate to={"/home"} />} />
            <Route path="/verifyotp" element={<VerifyOTPPage />} />
            <Route path="/home" element={authUser ? <Homepage /> : <Navigate to={"/login"} />} />
            <Route path="*" element={<Nopage />} />
        </Routes>
    )
}

export default Router

import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Indexpage from '../pages/Indexpage/Indexpage';
import Signuppage from '../pages/Signuppage/Signuppage';
import Loginpage from '../pages/Loginpage/Loginpage';
import Nopage from '../pages/Nopage/Nopage';
import LeanMorePage from '../pages/Learnmorepage/LeanMorePage';
// import VerifyOTPPage from '../pages/VerifyOTPPage/VerifyOTPPage';
import { userControllerStore } from '../store/userControllerStore';
import Homepage from '../pages/Homepage/Homepage';

function Router() {

    const { authUser, isOTPVerified, OTPVerified } = userControllerStore()

    console.log("Router - authUser: ", authUser)
    console.log("Router - OTPVerified: ", OTPVerified)
    // console.log("Router - isOTPVerified: ", isOTPVerified)

    return (
        // <Routes>
        //     <Route path="/" element={<Indexpage />} />
        //     <Route path="/learnmore" element={<LeanMorePage />} />
        //     <Route path="/signup" element={!authUser ? <Signuppage /> : <Navigate to={"/verifyotp"} />} />
        //     <Route path="/verifyotp" element={authUser && !isOTPVerified ? <VerifyOTPPage /> : <Navigate to={"/login"} />} />
        //     <Route path="/login" element={!authUser ? <Loginpage /> : <Navigate to={"/home"} />} />
        //     <Route path="/home" element={authUser ? <Homepage /> : <Navigate to={"/login"} />} />
        //     <Route path="*" element={<Nopage />} />
        // </Routes>

        <Routes>
            <Route path='/' element={<Indexpage />} />
            <Route path='/learnmore' element={<LeanMorePage />} />
            <Route path='/signup' element={!authUser ? <Signuppage /> : <Navigate to={"/home"} />} />
            <Route path='/login' element={!authUser ? <Loginpage /> : <Navigate to={"/home"} />} />
            <Route path='/home' element={authUser ? <Homepage /> : <Navigate to={"/login"} />} />
            <Route path='*' element={<Nopage />} />
        </Routes>
    )
}

export default Router

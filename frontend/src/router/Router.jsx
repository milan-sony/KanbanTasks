import React from 'react'
import { Routes, Route } from "react-router";
import Indexpage from '../pages/Indexpage/Indexpage';
import Signuppage from '../pages/Signuppage/Signuppage';
import Loginpage from '../pages/Loginpage/Loginpage';
import Nopage from '../pages/Nopage/Nopage';
import LeanMorePage from '../pages/Learnmorepage/LeanMorePage';
import VerifyOTPPage from '../pages/VerifyOTPPage/VerifyOTPPage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Indexpage />} />
            <Route path='/learnmore' element={<LeanMorePage />} />
            <Route path='/signup' element={<Signuppage />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path='/verifyotp' element={<VerifyOTPPage />} />
            <Route path="*" element={<Nopage />} />
        </Routes>
    )
}

export default Router

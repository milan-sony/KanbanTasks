import React from 'react'
import { Routes, Route } from "react-router";
import Homepage from '../pages/HomePage/HomePage';
import Signuppage from '../pages/Signuppage/Signuppage';
import Loginpage from '../pages/Loginpage/Loginpage';
import Nopage from '../pages/Nopage/Nopage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signuppage />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path="*" element={<Nopage />} />
        </Routes>
    )
}

export default Router

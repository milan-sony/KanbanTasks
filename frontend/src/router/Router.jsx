import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Homepage from '../pages/HomePage/HomePage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    )
}

export default Router

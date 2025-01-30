import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import VerifyOTPPage from '../VerifyOTPPage/VerifyOTPPage'
import { userControllerStore } from '../../store/userControllerStore'

function Homepage() {
    const { authUser, OTPVerified } = userControllerStore()

    return (
        <div>
            <Navbar />
            {
                authUser && !OTPVerified ?
                    <VerifyOTPPage />
                    :
                    <h1>heheh</h1>
            }
        </div>
    )
}

export default Homepage

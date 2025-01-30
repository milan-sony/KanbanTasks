import React, { useState } from 'react'
import { Link } from 'react-router'
import { userControllerStore } from '../../store/userControllerStore'
import toast from 'react-hot-toast'

function VerifyOTPPage() {

    const { authUser, verifyOTP, isOTPVerified } = userControllerStore()

    if (!authUser) return (
        <div className='flex flex-col justify-center h-screen w-1/2 p-20'>
            <h1 className='text-black dark:text-white text-8xl font-black mb-4 font-Open-Sans'>401</h1>
            <p className='text-gray-400 font-Open-Sans text-xl mb-4'>Unauthorized !</p>
            <h1 className='text-gray-400 text-4xl font-bold font-Open-Sans mb-4'>KanbanTasks</h1>
            <Link to={"/"} className='bg-black w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:text-white mb-4 sm:mr-4 capitalize flex justify-center items-center'>Go back</Link>
        </div>
    )

    const [formData, setFormData] = useState({
        email: authUser.email,
        otp: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log("Form Data: ", formData)
    }

    const validateForm = () => {
        const { otp } = formData

        // check empty field
        if (!otp) {
            return toast.error("Please enter the OTP")
        }

        // check the length of the OTP
        if (otp.length < 6 || otp.length > 7) {
            return toast.error("Please check the OTP")
        }

        return true
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const isFormValidate = validateForm()
        if (isFormValidate === true) {
            console.log("Verify OTP: ", formData)
            verifyOTP(formData)
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
            <div className="bg-white dark:bg-black flex justify-center items-center">
                <h1 className='text-black dark:text-white font-black text-xl sm:text-xl md:text-2xl lg:text-4xl'>KanbanTasks</h1>
            </div>
            {/* verify otp form */}
            <div className="bg-slate-100 dark:bg-gray-900">
                <div className='w-full h-screen'>
                    <div className="contain pt-36">
                        <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden dark:bg-slate-900">
                            <h2 className="text-2xl uppercase font-black mb-1 font-Open-Sans text-black dark:text-white">Verify OTP</h2>
                            <p className="text-gray-600 mb-6 text-sm dark:text-white font-Open-Sans">Please enter the OTP we have sent to your email: <strong>{formData.email}</strong></p>
                            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                                <div className="space-y-2 mb-2">
                                    <div><input type='number' name="otp" value={formData.otp} className="block w-full px-4 py-3 outline-none text-black font-Open-Sans font-normal text-sm rounded-md outline-gray-200" placeholder="000000" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type='submit' className='block w-full py-2 text-center text-white bg-gray-600 rounded dark:hover:bg-black hover:text-white hover:bg-black uppercase font-Open-Sans font-medium' disabled={isOTPVerified}>
                                        {
                                            isOTPVerified ? (
                                                <span className='animate-pulse'>Verifying...</span>
                                            ) : "Verify OTP"
                                        }
                                    </button>
                                    <div className="pt-5">
                                        <Link to="/" className='text-black dark:text-white text-sm font-semibold underline hover:text-gray-600 font-Open-Sans'>Go Back</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOTPPage

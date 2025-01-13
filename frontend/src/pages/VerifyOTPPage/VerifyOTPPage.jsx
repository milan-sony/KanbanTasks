import React from 'react'
import { Link } from 'react-router'

function VerifyOTPPage() {
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
                            <p className="text-gray-600 mb-6 text-sm dark:text-white font-Open-Sans">Please enter the OTP we have sent to your email</p>
                            <form autoComplete="off" noValidate>
                                <div className="space-y-2 mb-2">
                                    <div><input type='number' name="otp" className="block w-full px-4 py-3 outline-none text-black font-Open-Sans font-normal text-sm rounded-md outline-gray-200" placeholder="000000" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type='submit' className='block w-full py-2 text-center text-white bg-gray-600 rounded dark:hover:bg-black hover:text-white hover:bg-black uppercase font-Open-Sans font-medium'>Verify OTP
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

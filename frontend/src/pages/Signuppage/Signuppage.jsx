import { EyeOff } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function Signuppage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
            <div className="bg-white dark:bg-black flex justify-center items-center">
                <h1 className='text-black dark:text-white font-black text-xl sm:text-xl md:text-2xl lg:text-4xl'>KanbanTasks</h1>
            </div>
            {/* signup form */}
            <div className="bg-slate-100 dark:bg-gray-900">
                <div className='w-full h-screen'>
                    <div className="contain pt-36">
                        <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden dark:bg-slate-900">
                            <h2 className="text-2xl uppercase font-black mb-1 font-Open-Sans text-black dark:text-white">Signup</h2>
                            <p className="text-gray-600 mb-6 text-sm dark:text-white font-Open-Sans">Get started with your free account</p>
                            <form autoComplete="off" noValidate>
                                <div className="space-y-2 mb-2">
                                    <div><label className="text-gray-600 dark:text-white mb-2 block">Name</label><input type="text" name="fullName" className="block w-full px-4 py-3 outline-none text-black font-Open-Sans font-normal text-sm rounded-md outline-gray-200" placeholder="Milan Sony" />
                                    </div>
                                </div>
                                <div className="space-y-2 mb-2">
                                    <div><label className="text-gray-600 dark:text-white mb-2 block">Email address</label><input type="email" name="email" className="block w-full px-4 py-3 outline-none text-black font-Open-Sans font-normal text-sm rounded-md outline-gray-200" placeholder="youremail.@domain.com" />
                                    </div>
                                </div>
                                <div className="space-y-2 mb-2">
                                    <div><label className="text-gray-600 dark:text-white mb-2 block">Password</label><div className="relative"><input type="password" name="password" className="block w-full px-4 py-3 outline-none text-black font-Open-Sans font-normal text-sm rounded-md outline-gray-200" placeholder="password" />
                                        <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300">
                                            <EyeOff className='size-6 text-gray-400' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button type='submit' className='block w-full py-2 text-center text-white bg-gray-600 rounded dark:hover:bg-black hover:text-white hover:bg-black uppercase font-Open-Sans font-medium'>Create Account
                                    </button>
                                    <div className="flex justify-between pt-5">
                                        <p className="text-gray-600 text-sm dark:text-white font-Open-Sans">Already have an account? <Link to="/login" className='text-black dark:text-white text-sm font-semibold underline hover:text-gray-600 font-Open-Sans'>Login</Link></p>
                                        <Link to="/" className='text-black dark:text-white text-sm font-semibold underline hover:text-gray-600 font-Open-Sans'>Go back</Link>
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

export default Signuppage

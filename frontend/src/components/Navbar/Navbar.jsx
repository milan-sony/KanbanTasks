import { Kanban } from 'lucide-react'
import React from 'react'

function Navbar() {
    return (
        <nav className="bg-white dark:bg-black">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className='flex justify-center items-center'>
                        <Kanban className='size-8 mr-2 text-black dark:text-white' />
                        <span className="self-center text-2xl font-black whitespace-nowrap dark:text-white font-Open-Sans hover:text-red-500">KanbanTasks</span>
                    </span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="py-2 px-3 md:border-0 md:p-0 text-black dark:text-white hover:text-red-500 font-Open-Sans text-base font-semibold capitalize">Home</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 px-3 md:border-0 md:p-0 text-black dark:text-white hover:text-red-500 font-Open-Sans text-base font-semibold capitalize">About</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 px-3 md:border-0 md:p-0 text-black dark:text-white hover:text-red-500 font-Open-Sans text-base font-semibold capitalize">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

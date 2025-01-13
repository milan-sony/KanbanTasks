import React from 'react'
import scrumBoard from "/undraw_scrum-board_uqku.svg"
import { Kanban } from 'lucide-react'

function Homepage() {
    return (
        <div className='h-dvh'>
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
                                <button className='bg-black w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 mr-4'>Signup</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-black p-20 h-[600px]'>
                <div className="flex flex-col justify-center">
                    <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-black font-Open-Sans text-black dark:text-white mb-5'>KanbanTasks</h1>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl font-Open-Sans font-medium text-gray-400 mb-5'>Boost productivity and collaboration with our Kanban board for task assignment and integrated reminders.</p>
                    <div className='flex flex-col items-center sm:flex-row sm:items-start'>
                        <button className='bg-black w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 mb-4 sm:mr-4 '>Try it's free</button>
                        <button className='bg-gray-400 w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 sm:mr-4'>Learn more</button>
                    </div>
                </div>
                <div className="flex justify-center items-center"><img src={scrumBoard} alt="image" className='size-60 sm:size-60 md:size-60 lg:size-96' /></div>
            </div>
        </div>
    )
}

export default Homepage

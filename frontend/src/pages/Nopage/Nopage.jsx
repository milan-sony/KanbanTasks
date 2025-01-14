import React from 'react'
import { Link } from 'react-router'

function Nopage() {
    return (
        <div className='flex flex-col justify-center h-screen w-1/2 p-20'>
            <h1 className='text-black dark:text-white text-8xl font-black mb-4 font-Open-Sans'>404</h1>
            <p className='text-gray-400 font-Open-Sans text-xl mb-4'>Page not found!</p>
            <h1 className='text-gray-400 text-4xl font-bold font-Open-Sans mb-4'>KanbanTasks</h1>
            <Link to={"/"} className='bg-black w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:text-white mb-4 sm:mr-4 capitalize flex justify-center items-center'>Go back</Link>
        </div>
    )
}

export default Nopage

import React from 'react'
import { Link } from 'react-router'


function LeanMorePage() {
    return (
        <div className='flex flex-col justify-center h-screen w-1/2 p-20'>
            <h1 className='text-black dark:text-white text-8xl font-black mb-4 font-Open-Sans'>Learn More</h1>
            <h1 className='text-gray-400 text-4xl font-bold mb-4 font-Open-Sans'>KanbanTasks</h1>
            <p className='text-gray-400 font-Open-Sans text-xs mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod suscipit nesciunt aliquam magnam, inventore necessitatibus error facere a omnis molestias reprehenderit. Expedita accusamus, repellendus cupiditate iste voluptatem tenetur vero!</p>
            <Link to={"/"} className='bg-black w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:text-white mb-4 sm:mr-4 capitalize flex justify-center items-center'>Go back</Link>
        </div>
    )
}

export default LeanMorePage

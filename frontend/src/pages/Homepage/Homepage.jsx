import React from 'react'
import scrumBoard from "/undraw_scrum-board_uqku.svg"

function Homepage() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-black p-20 h-[600px]'>
            <div className="flex flex-col justify-center">
                <h1 className='text-2xl sm:text-4xl md:text-6xl font-black font-Open-Sans text-black dark:text-white mb-5'>KanbanTasks</h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-Open-Sans font-medium text-gray-400 mb-5'>Boost productivity and collaboration with our Kanban board for task assignment and integrated reminders.</p>
                <div className='flex justify-start'>
                    <button className='bg-black w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 mr-4'>Try it's free</button>
                    <button className='bg-gray-400 w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 mr-4'>Learn more</button>
                </div>
            </div>
            <div className="flex justify-center items-center"><img src={scrumBoard} alt="image" className='size-60 sm:size-60 md:size-96' /></div>
        </div>
    )
}

export default Homepage

import React from 'react'
import scrumBoard from "/undraw_scrum-board_uqku.svg"

function Homepage() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-64 bg-white dark:bg-black'>
            <div className="p-10 flex flex-col justify-center">
                <h1 className='text-6xl font-black font-Open-Sans text-black dark:text-white pb-5'>KanbanTasks</h1>
                <p className='text-xl font-Open-Sans font-medium text-gray-400'>Boost productivity and collaboration with our Kanban board for task assignment and integrated reminders.</p>
            </div>
            <div className="p-10 flex justify-center items-center"><img src={scrumBoard} alt="image" className='size-[450px]' /></div>
        </div>
    )
}

export default Homepage

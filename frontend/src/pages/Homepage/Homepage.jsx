import React from 'react'

function Homepage() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div class="bg-gray-100 p-4">
                <h1 className='text-4xl font-black font-Open-Sans text-black dark:text-white pb'>KanbanTasks</h1>
                <p>Boost productivity and collaboration with our Kanban board for task assignment and integrated reminders.</p>
            </div>
            <div class="bg-gray-100 p-4">Item 2</div>
        </div>
    )
}

export default Homepage

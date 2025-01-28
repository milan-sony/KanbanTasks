import React from 'react'
import scrumBoard from "/undraw_scrum-board_uqku.svg"
// import { Kanban } from 'lucide-react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'


function Indexpage() {
    return (
        <div className='h-dvh'>
            <Navbar/>

            <div className='grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-black p-20 h-[600px]'>
                <div className="flex flex-col justify-center">
                    <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-black font-Open-Sans text-black dark:text-white mb-5'>KanbanTasks</h1>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl font-Open-Sans font-medium text-gray-400 mb-5'>Boost productivity and collaboration with our Kanban board for task assignment and integrated reminders.</p>
                    <div className='flex flex-col items-center sm:flex-row sm:items-start'>
                        <Link to={"/signup"} className='bg-black w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:text-white mb-4 sm:mr-4 capitalize flex justify-center items-center'>Try it's free</Link>
                        <Link to={"/learnmore"} className='bg-gray-400 w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-slate-600 dark:hover:bg-slate-400 sm:mr-4 capitalize flex justify-center items-center'>Learn more</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center"><img src={scrumBoard} alt="image" className='size-60 sm:size-60 md:size-60 lg:size-96' /></div>
            </div>
        </div>
    )
}

export default Indexpage

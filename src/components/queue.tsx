import { useState } from 'react';

// make this a child of the draggable class
function Queue() {

    // make these drag and droppable within itself (reorder the queue)
    // - do it internally because it's local functionality
    return <div className='w-full h-full min-w-fit min-h-fit row-span-4 bg-slate-500 rounded-2xl'>
        <h2>Up Next</h2>
        <ul>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>remove</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>remove</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>remove</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>remove</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>remove</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                </div>
            </li>
        </ul>
    </div>
}

export default Queue;
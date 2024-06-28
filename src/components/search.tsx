import { useState } from 'react';

// make this a child of the draggable class
function Search() {

    return <div className='w-full h-full min-w-fit min-h-fit col-span-2 row-span-3 bg-indigo-800 rounded-2xl'>
        <input
            type="text"
            placeholder='search...'
            className='rounded-lg'
        />
        <ul>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>length</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                    <p>...</p>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>length</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                    <p>...</p>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>length</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                    <p>...</p>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>length</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                    <p>...</p>
                </div>
            </li>
            <li className='w-full border-b-2'>
                <div className='flex justify-between'>
                    <h2>Title</h2>
                    <p>length</p>
                </div>
                <div className='flex justify-between'>
                    <h3>artist</h3>
                    <p>...</p>
                </div>
            </li>
        </ul>
    </div>
}

export default Search;
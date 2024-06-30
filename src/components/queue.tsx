import { useState } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import remove from '../assets/playlist_remove.svg';

function queueItem(key:number) {
    return <li key={key} className='flex justify-between items-center gap-2 w-full p-2 rounded-lg bg-eigen-light'>
        <div>
            <h2 className='text-lg'>Hallelujah</h2>
            <h3>Jeff Buckley</h3>
        </div>
        <button className='rounded-full'>
            <img src={remove} alt="remove from queue" className='w-7' />
        </button>
    </li>
}

// make this a child of the draggable class
function Queue() {

    const color = useSelector((state: RootState) => state.settings.color);

    let tempList = [
        queueItem(1),
        queueItem(2), 
        queueItem(3),
        queueItem(4), 
        queueItem(5),
        queueItem(6), 
        queueItem(7),
        queueItem(8), 
        queueItem(9),
        queueItem(10)
    ];

    return <div key="Queue" className={`w-full h-full min-w-fit min-h-fit col-span-1 row-span-4 p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-hidden`}>
        <h2 className='pb-3 text-xl'>Up Next</h2>
        <ul className='flex flex-col gap-1 h-full overflow-y-scroll'>
            {tempList.map(e => {return e;})}
        </ul>
    </div>
}

export default Queue;
import { useState, useRef } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { colSize, rowSize } from '../constants/grid';

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

    let winWidth = useRef(window.innerWidth);
    let winHeight = useRef(window.innerHeight);

    const { mode, color, queue } = useSelector((state: RootState) => state.settings);

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

    return <div
        key="Queue"
        style={ mode ? {
            width: `${colSize(winWidth.current, queue.colSpan)}px`,
            height: `${rowSize(winHeight.current, queue.rowSpan)}px`,
            minWidth: `${colSize(winWidth.current, 2)}px`,
            minHeight: `${rowSize(winHeight.current, 4)}px`,
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${queue.width}px`,
            height: `${queue.height}px`,
            transform: `translate(${queue.posX}px, ${queue.posY}px)`,
        }}
        className={`min-w-[225px] p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-hidden transition-all duration-700`}
    >
        <h2 className='pb-3 text-xl'>Up Next</h2>
        <ul className='flex flex-col gap-1 h-full overflow-y-scroll'>
            {tempList.map(e => {return e;})}
        </ul>
    </div>
}

export default Queue;
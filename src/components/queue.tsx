import { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { setQueue } from '../state/queueSlice';

import { getQueue } from '../apicontroller';

import remove from '../assets/playlist_remove.svg';
import { TrackData } from '../state/interfaces';

function queueItem(track:TrackData) {
    return <li key={track.id} className='flex justify-start items-center gap-2 w-full p-2 cursor-pointer rounded-lg hover:bg-eigen-light hover:bg-opacity-50'>
        <img className='w-16 aspect-square rounded' src={track.images[0].url} alt="" />
        <div>
            <h2 className='text-lg'>{track.name}</h2>
            <h3>{track.artist.name}</h3>
        </div>
        <button className='rounded-full ml-auto'>
            <img src={remove} alt="remove from queue" className='min-w-7' />
        </button>
    </li>
}

// make this a child of the draggable class
function Queue() {

    const dispatch = useDispatch();

    useEffect(() => {
        getQueue().then(res => {
            if (res) dispatch(setQueue(res));
        });
    }, []);

    const { queue } = useSelector((state: RootState) => state.queue);
    const { snapToGrid, color, queueData } = useSelector((state: RootState) => state.settings);

    return <div
        key="Queue"
        style={ snapToGrid ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${queueData.colSpan}`,
            gridRow: `span ${queueData.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${queueData.width}px`,
            height: `${queueData.height}px`,
            transform: `translate(${queueData.posX}px, ${queueData.posY}px)`,
        }}
        className={queueData.showing ? `p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-hidden transition-all duration-700` : 'hidden'}
    >
        <h2 className='pb-3 text-xl'>Up Next</h2>
        { queue.length === 0 ?
            <h2 className='mt-3 text-center text-xl'>queue is currently empty</h2>
            : null
        }
        <ul className='flex flex-col gap-1 pb-10 h-full overflow-y-scroll'>
            {queue.map(track => {
                return queueItem(track);
            })}
        </ul>
    </div>
}

export default Queue;
import { useState } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import info from '../assets/info.svg';
import album from '../assets/album.svg';


function playlistItem(key:number) {
    return <li key={key} className='flex justify-start items-center gap-2 w-full p-2 rounded-lg bg-eigen-light'>
        <img src={album} alt="" />
        <div>
            <h2 className='text-lg'>Best of</h2>
            <h3>237 songs</h3>
        </div>
        <img src={info} alt=""  className='ml-auto'/>
    </li>
}

// make this a child of the draggable class
function Playlist() {
    
    const color = useSelector((state: RootState) => state.settings.color);

    let tempList = [
        playlistItem(1),
        playlistItem(2), 
        playlistItem(3),
        playlistItem(4), 
        playlistItem(5),
        playlistItem(6), 
        playlistItem(7),
        playlistItem(8), 
        playlistItem(9),
        playlistItem(10)
    ];

    return <div key="Playlist" className={`w-full h-full min-w-fit min-h-fit col-span-2 row-span-4 p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-hidden`}>
        <h2 className='pb-3 text-xl'>Playlist</h2>
        <ul className='flex flex-col gap-1 w-full h-full overflow-y-scroll'>
            {tempList.map((e) => {return e})}
        </ul>
    </div>
}

export default Playlist;
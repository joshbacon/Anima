import { useEffect, useState, useRef } from 'react';

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
    
    const { mode, color, playlist } = useSelector((state: RootState) => state.settings);

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

    return <div
        key="Playlist"
        style={ mode ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${playlist.colSpan}`,
            gridRow: `span ${playlist.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${playlist.width}px`,
            height: `${playlist.height}px`,
            transform: `translate(${playlist.posX}px, ${playlist.posY}px)`,
        }}
        className={`p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-hidden transition-all duration-700`}
    >
        <h2 className='pb-3 text-xl'>Playlists</h2>
        <ul className='flex flex-col gap-1 w-full h-full overflow-y-scroll'>
            {tempList.map((e) => {return e})}
        </ul>
    </div>
}

export default Playlist;
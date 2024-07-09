import { useEffect, useState, useRef } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { setPlaylists } from '../state/playlistSlice';

import { getPlaylists } from '../apicontroller';

import info from '../assets/info.svg';
import album from '../assets/album.svg';
import { PlaylistData } from '../state/interfaces';


function playlistItem(data:PlaylistData) {
    return <li key={data.id} className='flex justify-start items-center gap-2 w-full p-2 cursor-pointer rounded-lg bg-eigen-light'>
        <img className='w-16 rounded' src={data.images[0].url} alt="" />
        <div>
            <h2 className='text-lg'>{data.name}</h2>
            <h3>{data.tracks} songs</h3>
        </div>
        <img src={info} alt=""  className='ml-auto'/>
    </li>
}

// make this a child of the draggable class
function Playlist() {

    const dispatch = useDispatch();

    useEffect(() => {
        getPlaylists().then(res => {
            if (res) dispatch(setPlaylists(res));
        });
    }, []);
    
    const { playlists } = useSelector((state: RootState) => state.playlists);
    const { mode, color, playlistData } = useSelector((state: RootState) => state.settings);

    return <div
        key="Playlist"
        style={ mode ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${playlistData.colSpan}`,
            gridRow: `span ${playlistData.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${playlistData.width}px`,
            height: `${playlistData.height}px`,
            transform: `translate(${playlistData.posX}px, ${playlistData.posY}px)`,
        }}
        className={`p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-hidden transition-all duration-700`}
    >
        <h2 className='pb-3 text-xl'>Playlists</h2>
        <ul className='flex flex-col gap-1 pb-10 w-full h-full overflow-y-scroll'>
            {playlists.map(playlist => {
                return playlistItem(playlist);
            })}
        </ul>
    </div>
}

export default Playlist;
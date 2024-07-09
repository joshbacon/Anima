import { useEffect, useState, useRef } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { changeName, setTopArtists, setTopTracks } from '../state/profileSlice';

import { getProfile, getTopArtists, getTopTracks } from '../apicontroller';

import account from '../assets/account.svg';
import album from '../assets/album.svg';
import info from '../assets/info.svg';
import { ArtistData, TrackData } from '../state/interfaces';

// make this a child of the draggable class
function Profile() {

    const dispatch = useDispatch();

    useEffect(() => {
        getProfile().then(res => {
            if (res) dispatch(changeName(res));
        });
        updateTimeframe('short_term');
    }, []);
    
    const { username } = useSelector((state: RootState) => state.profile);
    const { mode, color, profileData } = useSelector((state: RootState) => state.settings);
    const { topArtists, topTracks } = useSelector((state: RootState) => state.profile);

    function updateTimeframe(range:string) {
        getTopArtists(range).then(res => {
            if (res) dispatch(setTopArtists(res));
        });
        getTopTracks(range).then(res => {
            if (res) dispatch(setTopTracks(res));
        });
    }

    function artistItem(data:ArtistData) {
        return <div key={data.id} className='flex flex-col justify-center items-center w-full h-full py-2 cursor-pointer hover:bg-eigen-light hover:bg-opacity-50 rounded-xl'>
            <img className='p-2 rounded' src={data.images[0].url} alt="album cover" />
            <h2>{data.name}</h2>
        </div>
    }

    function trackItem(data:TrackData) {
        return <li key={data.id} className='flex justify-start items-center gap-2 w-full p-2 cursor-pointer rounded-lg bg-eigen-light'>
            <img className='w-16 rounded' src={data.images[0].url} alt="" />
            <div>
                <h2 className='text-lg'>{data.name}</h2>
                <h3>{data.artist.name}</h3>
            </div>
            <img src={info} alt=""  className='ml-auto cursor-pointer'/>
        </li>
    }

    return <div
        key="Profile"
        style={ mode ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${profileData.colSpan}`,
            gridRow: `span ${profileData.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${profileData.width}px`,
            height: `${profileData.height}px`,
            transform: `translate(${profileData.posX}px, ${profileData.posY}px)`
        }}
        className={`flex flex-col gap-4 p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-y-scroll transition-all duration-700`}
    >
        <div className='flex justify-start items-center gap-3'>
            <img src={account} alt="" />
            <h2 className='text-xl'>{username}</h2>
            <select name="categories" id="categories" className='ml-auto' onChange={(e) => {updateTimeframe(e.target.value)}}>
                <option value="short_term">Short Term</option>
                <option value="medium_term">Medium Term</option>
                <option value="long_term">Long Term</option>
            </select>
        </div>
        <div>
            <h2 className='text-lg'>Top artists</h2>
            <div className='grid grid-cols-3 place-items-center gap-2 text-center'>
                {topArtists.map(artist => {
                    return artistItem(artist);
                })}
            </div>
        </div>
        <div>
            <h2 className='text-lg'>Top tracks</h2>
            <ul className='flex flex-col gap-1'>
                {topTracks.map(track => {
                    return trackItem(track);
                })}
            </ul>
        </div>
    </div>
}

export default Profile;
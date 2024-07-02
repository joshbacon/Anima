import { useEffect, useState, useRef } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import { setProfile, setTopItems } from '../apicontroller';

import account from '../assets/account.svg';
import album from '../assets/album.svg';
import info from '../assets/info.svg';

// make this a child of the draggable class
function Profile() {

    useEffect(() => {
        // figure out where to load this... right now when the component is loaded
        // it calls again but we really just need one on initial load ofthe page
        setProfile();
        setTopItems('short_term');
    }, []);
    
    const { mode, color, profile } = useSelector((state: RootState) => state.settings);
    
    let tempList = [
        trackItem(1),
        trackItem(2), 
        trackItem(3),
        trackItem(4), 
        trackItem(5)
    ];

    function trackItem(key:number) {
        return <li key={key} className='flex justify-start items-center gap-2 w-full p-2 rounded-lg bg-eigen-light'>
            <img src={album} alt="" />
            <div>
                <h2 className='text-lg'>Best of</h2>
                <h3>237 songs</h3>
            </div>
            <img src={info} alt=""  className='ml-auto'/>
        </li>
    }

    return <div
        key="Profile"
        style={ mode ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${profile.colSpan}`,
            gridRow: `span ${profile.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${profile.width}px`,
            height: `${profile.height}px`,
            transform: `translate(${profile.posX}px, ${profile.posY}px)`
        }}
        className={`flex flex-col gap-4 p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-y-scroll transition-all duration-700`}
    >
        <div className='flex justify-start items-center gap-3'>
            <img src={account} alt="" />
            <h2 className='text-xl'>{localStorage.getItem('name')}</h2>
            <select name="categories" id="categories" className='ml-auto' onChange={(e) => {setTopItems(e.target.value)}}>
                <option value="short_term">Short Term</option>
                <option value="medium_term">Medium Term</option>
                <option value="long_term">Long Term</option>
            </select>
        </div>
        <div>
            <h2 className='text-lg'>Top artists</h2>
            <div className='flex gap-2 text-center'>
                <div className='flex flex-col w-1/3 h-full hover:bg-eigen-light hover:bg-opacity-50 rounded-xl'>
                    <img src={album} alt="album cover" />
                    <h2>Eminem</h2>
                </div>
                <div className='flex flex-col w-1/3 h-full hover:bg-eigen-light hover:bg-opacity-50 rounded-xl'>
                    <img src={album} alt="album cover" />
                    <h2>Zach Bryan</h2>
                </div>
                <div className='flex flex-col w-1/3 h-full hover:bg-eigen-light hover:bg-opacity-50 rounded-xl'>
                    <img src={album} alt="album cover" />
                    <h2>My Chemical Romance</h2>
                </div>
            </div>
        </div>
        <div>
            <h2 className='text-lg'>Top tracks</h2>
            <ul className='flex flex-col gap-1'>
                {tempList.map((e) => {return e})}
            </ul>
        </div>
    </div>
}

export default Profile;
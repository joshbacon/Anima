import { useState } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import account from '../assets/account.svg';
import album from '../assets/album.svg';
import info from '../assets/info.svg';

// make this a child of the draggable class
function Profile() {
    
    const color = useSelector((state: RootState) => state.settings.color);
    
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

    return <div key="Profile" className={`flex flex-col gap-4 w-full h-full min-w-fit min-h-fit p-3 col-span-2 row-span-2 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-y-scroll`}>
        <div className='flex justify-start items-center gap-3'>
            <img src={account} alt="" />
            <h2 className='text-xl'>Profile</h2>
        </div>
        <div>
            <h2 className='text-lg'>Top artists this month</h2>
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
            <h2 className='text-lg'>Top tracks this month</h2>
            <ul className='flex flex-col gap-1'>
                {tempList.map((e) => {return e})}
            </ul>
        </div>
    </div>
}

export default Profile;
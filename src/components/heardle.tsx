import { useState, useRef } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { colSize, rowSize } from '../constants/grid';

import play from '../assets/play.svg';
import right from '../assets/right.svg';
import wrong from '../assets/wrong.svg';

// make this a child of the draggable class
function Heardle() {

    let winWidth = useRef(window.innerWidth);
    let winHeight = useRef(window.innerHeight);
    
    const { mode, color, heardle} = useSelector((state: RootState) => state.settings);

    return <div
        key="Heardle"
        style={ mode ? {
            width: `${colSize(winWidth.current, heardle.colSpan)}px`,
            height: `${rowSize(winHeight.current, heardle.rowSpan)}px`,
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${heardle.width}px`,
            height: `${heardle.height}px`,
            transform: `translate(${heardle.posX}px, ${heardle.posY}px)`
        }}
        className={`min-w-[450px] min-h-[290px] p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-auto transition-all duration-700`}
    >
        <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl'>Heardle</h2>
            <div className='flex gap-2'>
                <h2>Categories</h2>
                <select name="categories" id="categories">
                    <option value="top">Top 100</option>
                    <option value="local">Your Music</option>
                    <option value="20s">20s</option>
                    <option value="10s">10s</option>
                    <option value="90s">90s</option>
                    <option value="80s">80s</option>
                    <option value="70s">70s</option>
                </select>
            </div>
        </div>
        <div className='flex justify-around items-center gap-2 w-full'>
            <div className='w-full'>
                <div className='flex justify-between w-full p-2 bg-eigen rounded-lg'>
                    <h2 className='text-lg'>Skipped</h2>
                    <div className='flex gap-1'>
                        <img src={right} alt="right" />
                        <img src={wrong} alt="wrong" />
                    </div>
                </div>
                <div className='flex justify-between w-full p-2 bg-eigen rounded-lg'>
                    <h2 className='text-lg'>Skipped</h2>
                    <div className='flex gap-1'>
                        <img src={right} alt="right" />
                        <img src={wrong} alt="wrong" />
                    </div>
                </div>
                <div className='flex justify-between w-full p-2 bg-eigen rounded-lg'>
                    <h2 className='text-lg'>Skipped</h2>
                    <div className='flex gap-1'>
                        <img src={right} alt="right" />
                        <img src={wrong} alt="wrong" />
                    </div>
                </div>
                <div className='flex justify-between w-full p-2 bg-eigen rounded-lg'>
                    <h2 className='text-lg'>Skipped</h2>
                    <div className='flex gap-1'>
                        <img src={right} alt="right" />
                        <img src={wrong} alt="wrong" />
                    </div>
                </div>
                <div className='flex justify-between w-full p-2 bg-eigen rounded-lg'>
                    <h2 className='text-lg'>Skipped</h2>
                    <div className='flex gap-1'>
                        <img src={right} alt="right" />
                        <img src={wrong} alt="wrong" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full">
                <div className='flex w-full'>
                    <div className='w-[6.25%] h-2 bg-green-800 border-r-[1px]'></div>
                    <div className='w-[6.25%] h-2 bg-green-800 border-r-[1px]'></div>
                    <div className='w-[12.5%] h-2 bg-black border-r-[1px]'></div>
                    <div className='w-[18.75%] h-2 bg-black border-r-[1px]'></div>
                    <div className='w-[25%] h-2 bg-black border-r-[1px]'></div>
                    <div className='w-[31.25%] h-2 bg-black'></div>
                </div>
                <button>
                    <img src={play} width='42px' alt="play" />
                </button>
                <div className='w-full'>
                    <input
                        type="text"
                        placeholder='search...'
                        className='w-full px-2 py-1 text-xl rounded-md mb-3'
                    />
                    {/* TODO: need a dropdown under the search bar */}
                    <div className='flex justify-between items-center w-full'>
                        <button className={`px-3 py-1 text-lg font-semibold bg-${color}-600 rounded-md`}>
                            Skip (+1 sec)
                        </button>
                        <button className={`px-3 py-1 text-lg font-semibold bg-${color}-600 rounded-md`}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Heardle;
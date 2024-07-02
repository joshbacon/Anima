import { useEffect, useState, useRef } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { colSize, rowSize } from '../constants/grid';

import play from '../assets/play.svg';
import pause from '../assets/pause.svg';
import previous from '../assets/previous.svg';
import next from '../assets/next.svg';
import volume from '../assets/volume.svg';
import mute from '../assets/mute.svg';
import { getCurrentlyPlaying } from '../apicontroller';

// make this a child of the draggable class
function Player() {

    let winWidth = useRef(window.innerWidth);
    let winHeight = useRef(window.innerHeight);

    const { mode, color, player } = useSelector((state: RootState) => state.settings);

    const [playing, setPlaying] = useState<boolean>(false);
    const [currVolume, setCurrVolume] = useState<number>(50);
    const [isMuted, toggleMuted] = useState<boolean>(false);

    const [songLength, setSongLength] = useState<number>(300);
    const [timePlaying, setTimePlaying] = useState<number>(120);

    function nextSong() {
        
    }
    
    function previousSong() {
        
    }

    // need to set a min w/h for each individual component
    //  - set in the class of each
    //  - set in the settings input boxes (span and custom)
    //  - set as the initial state in the settingsSlice
    // look into mosaic libraries for a better fit of components

    return <div
        key="Player"
        style={ mode ? {
            width: `${colSize(winWidth.current, player.colSpan)}px`,
            height: `${rowSize(winHeight.current, player.rowSpan)}px`,
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${player.width}px`,
            height: `${player.height}px`,
            transform: `translate(${player.posX}px, ${player.posY}px)`,
        }}
        className={`flex justify-evenly items-center gap-5 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl p-3 transition-all duration-700`}
    >
        <div className='flex'>
            <div className='flex flex-col'>
                <h2 className='text-xl'>Hallelujah</h2>
                <h2>Jeff Buckley</h2>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 w-2/5'>
            <div className='flex'>
                <button onClick={previousSong}>
                    <img src={previous} width='42px' alt="previous button" />
                </button>
                <button onClick={() => setPlaying(!playing)}>
                    {
                        playing ?
                        <img src={pause} width='42px' alt="pause button" /> :
                        <img src={play} width='42px' alt="play button" />
                    }
                </button>
                <button onClick={nextSong}>
                    <img src={next} width='42px' alt="next button" />
                </button>
            </div>
            <div className='col-span-3 w-full h-3 bg-slate-50 rounded-lg'>
                <div className={`bg-eigen-light h-full rounded-lg w-[${(timePlaying/songLength*100).toFixed(0)}%]`} />
            </div>
        </div>
        <div className='flex gap-2'>
            <button onClick={() => toggleMuted(!isMuted)}>
                <img src={isMuted ? mute : volume} alt="toggle mute" />
            </button>
            <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={isMuted ? 0 : currVolume}
                onChange={(e:any) => setCurrVolume(e.target.value)}
                className={`accent-${color}-600`}
            />
        </div>
    </div>
}

export default Player;
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setCurrentlyPlaying } from '../state/playerSlice';

import play from '../assets/play.svg';
import pause from '../assets/pause.svg';
import previous from '../assets/previous.svg';
import next from '../assets/next.svg';
import volume from '../assets/volume.svg';
import mute from '../assets/mute.svg';
import { getCurrentlyPlaying, previousSong, nextSong } from '../apicontroller';

// make this a child of the draggable class
function Player() {

    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentlyPlaying().then(res => {
            if (res) dispatch(setCurrentlyPlaying(res));
        });
    }, []);

    const { track } = useSelector((state: RootState) => state.player);
    const { snapToGrid, color, playerData } = useSelector((state: RootState) => state.settings);

    const [playing, setPlaying] = useState<boolean>(false);
    const [currVolume, setCurrVolume] = useState<number>(50);
    const [isMuted, toggleMuted] = useState<boolean>(false);

    const [songLength, setSongLength] = useState<number>(300);
    const [timePlaying, setTimePlaying] = useState<number>(120);

    return <div
        key="Player"
        style={ snapToGrid ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${playerData.colSpan}`,
            gridRow: `span ${playerData.rowSpan}`
        } : {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${playerData.width}px`,
            height: `${playerData.height}px`,
            transform: `translate(${playerData.posX}px, ${playerData.posY}px)`,
        }}
        className={playerData.showing ? `flex justify-evenly items-center gap-5 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl p-3 transition-all duration-700` : 'hidden'}
    >
        <div className='flex'>
            <div className='flex flex-col'>
                <h2 className='text-xl'>{track.name}</h2>
                <h2>{track.artist.name}</h2>
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
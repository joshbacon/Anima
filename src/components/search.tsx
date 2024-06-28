import { useState } from 'react';

import info from '../assets/info.svg';
import album from '../assets/album.svg';
import playlist_add from '../assets/playlist_add.svg';
import favourite from '../assets/favourite.svg';
import favourite_selected from '../assets/favourite_selected.svg';


function searchItem(key:number, callback:any) {
    return <li key={key} className='flex gap-2 w-full p-2 rounded-lg bg-slate-700' onClick={() => callback(true)}>
        <img src={album} alt="album cover" />
        <div className='w-full'>
            <div className='flex justify-between'>
                <h2>Hallelujah</h2>
                <p>6:54</p>
            </div>
            <div className='flex justify-between'>
                <h3>Jeff Buckley</h3>
                <button className='rounded-full'>
                    <img src={info} alt="info" className='w-7' />
                </button>
            </div>
        </div>
    </li>
}

// make this a child of the draggable class
function Search() {

    function apiSearchQuery() {
        // debounce this
    }

    // make an interface to hold all the song data in one state object
    const [selectedSong, setSelectedSong] = useState<boolean>(false);
    const [selectedSongFavourited, setSelectedSongFavourited] = useState<boolean>(false);

    let tempList = [
        searchItem(1, setSelectedSong),
        searchItem(2, setSelectedSong), 
        searchItem(3, setSelectedSong),
        searchItem(4, setSelectedSong), 
        searchItem(5, setSelectedSong),
        searchItem(6, setSelectedSong)
    ];

    return <div className='w-full h-full min-w-fit min-h-fit col-span-2 row-span-3 p-3 bg-indigo-800 rounded-2xl overflow-hidden'>
        <input
            type="text"
            placeholder='search...'
            className='w-full px-2 py-1 text-xl rounded-md mb-3'
        />
        <div className='flex gap-2 w-full h-full'>
            <div className={`flex flex-col gap-4 h-full ${selectedSong ? 'block' : 'hidden'}`}>
                <img src={album} alt="" />
                <h2>Title</h2>
                <h2>Artist</h2>
                <h2>Album</h2>
                <div>
                    <button onClick={() => setSelectedSongFavourited(!selectedSongFavourited)}>
                        <img src={selectedSongFavourited ? favourite_selected : favourite} alt="favourite" />
                    </button>
                    <button>
                        <img src={playlist_add} alt="added to queue" />
                    </button>
                </div>
            </div>
            <ul className='flex flex-col gap-1 w-full h-full overflow-y-scroll'>
                {tempList.map((e) => {return e})}
            </ul>
        </div>
    </div>
}

export default Search;
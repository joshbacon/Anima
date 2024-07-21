import { useState, useEffect } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { search } from '../apicontroller'
import { TrackData, ArtistData, AlbumData } from '../state/interfaces';

import info from '../assets/info.svg';
import album from '../assets/album.svg';
import playlist_add from '../assets/playlist_add.svg';
import favourite from '../assets/favourite.svg';
import favourite_selected from '../assets/favourite_selected.svg';


function searchItem(data:TrackData|ArtistData|AlbumData, callback:Function) {
    if (data._type === "track"){
        const { id, name, images, duration, artist } = data as TrackData;
        const seconds = (duration / 1000 % 60).toFixed(0);
        const timeLength = `${Math.floor(duration / 1000 / 60)}:${seconds.length === 1 ? seconds+'0' : seconds}`;
        return <li key={id} className='flex gap-2 w-full p-2 cursor-pointer rounded-lg hover:bg-eigen-light hover:bg-opacity-50' onClick={() => callback(true)}>
            <img className='w-16 aspect-square' src={images[0].url} alt="album cover" />
            <div className='w-full'>
                <div className='flex justify-between'>
                    <h2>{name}</h2>
                    <p>{timeLength}</p>
                </div>
                <div className='flex justify-between'>
                    <h3>{artist.name}</h3>
                    <button className='rounded-full'>
                        <img src={info} alt="info" className='w-7' />
                    </button>
                </div>
            </div>
        </li>
    } else if (data._type === "artist") {
        const { id, name, images } = data as ArtistData;
        return <li key={id} className='flex gap-2 w-full p-2 cursor-pointer rounded-lg hover:bg-eigen-light hover:bg-opacity-50' onClick={() => callback(true)}>
            <img className='w-16 aspect-square' src={images[0].url} alt="album cover" />
            <div className='w-full'>
                <div className='flex justify-between'>
                    <h2>{name}</h2>
                </div>
            </div>
        </li>
    } else { // data._type === "album"
        const { id, name, images } = data as AlbumData;
        return <li key={id} className='flex gap-2 w-full p-2 cursor-pointer rounded-lg hover:bg-eigen-light hover:bg-opacity-50' onClick={() => callback(true)}>
            <img className='w-16 aspect-square' src={images[0].url} alt="album cover" />
            <div className='w-full'>
                <div className='flex justify-between'>
                    <h2>{name}</h2>
                </div>
            </div>
        </li>
    }
}

// make this a child of the draggable class
function Search() {
    
    const { snapToGrid, color, searchData } = useSelector((state: RootState) => state.settings);

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filter, setFilter] = useState<string>("track");

    const [searchResults, setSearchResults] = useState<(TrackData|ArtistData|AlbumData)[]>([]);

    useEffect(() => {
        const callSearch = setTimeout(() => {
            if (searchQuery) apiSearchQuery();
        }, 500);
        return () => clearTimeout(callSearch);
    }, [searchQuery, filter]);

    async function apiSearchQuery() {
        search(filter, searchQuery).then(response => {
            setSearchResults(response);
        });
    }

    // make an interface to hold all the song data in one state object
    const [selectedSong, setSelectedSong] = useState<boolean>(false);
    const [selectedSongFavourited, setSelectedSongFavourited] = useState<boolean>(false);

    return <div
        key="Search"
        style={ snapToGrid ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${searchData.colSpan}`,
            gridRow: `span ${searchData.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${searchData.width}px`,
            height: `${searchData.height}px`,
            transform: `translate(${searchData.posX}px, ${searchData.posY}px)`,
        }}
        className={searchData.showing ? `p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-hidden transition-all duration-700` : 'hidden'}
    >
        <input
            type="text"
            placeholder='search...'
            spellCheck="false"
            className='w-full px-2 py-1 text-xl rounded-md'
            onChange={(e) => {if (e.target.value) setSearchQuery(e.target.value)}}
        />
        <div className='flex gap-4 my-3'>
            <button
                onClick={() => {setFilter('track')}}
                className={`px-3 py-1 rounded ${filter === "track" ? 'bg-eigen' : 'bg-eigen-light'}`}
            >
                <h2>Track</h2>
            </button>
            <button
                onClick={() => {setFilter('artist')}}
                className={`px-3 py-1 rounded ${filter === "artist" ? 'bg-eigen' : 'bg-eigen-light'}`}
            >
                <h2>Artist</h2>
            </button>
            <button
                onClick={() => {setFilter('album')}}
                className={`px-3 py-1 rounded ${filter === "album" ? 'bg-eigen' : 'bg-eigen-light'}`}
            >
                <h2>Album</h2>
            </button>
        </div>
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
            <ul className='flex flex-col gap-1 pb-12 w-full h-full overflow-y-scroll'>
                {searchResults.map((item) => searchItem(item, setSelectedSong))}
            </ul>
        </div>
    </div>
}

export default Search;
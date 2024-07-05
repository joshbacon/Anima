
// settings list
// * have little info tool tips or just on the side explaining the purpose of the setting

// - toggle snap to grid
// -- animate the components moving to the new position on toggle (but quickly encase they spam it, idk debug)


// * grey out whatever section is disabled to be verbose

// snap-to-grid ON
// - be able to change the component sizes (col/row span) between a couple presets 
// - need to be able to fit nicely in 6x6 or whatever it ends up being, larger grid size means more available presets

// snap-to-grid OFF
// idk honestly


// have an option to set the cards to glass or other colors
// have different background colors too (also upload pictures???)

import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { toggleMode, changeColor, toggleShowing, changeColSpan, changeRowSpan, changeWidth, changeHeight } from "../state/settingsSlice";

import { signOut } from "../apicontroller";

// TODO: turn these in to redux actions.... I think

// function updateShowing(id:string, isShowing:boolean) {
//     let tempList:Component[] = [...componentList];
//     tempList[tempList.map(c => c.id).indexOf(id)]Data.showing = isShowing;
//     setComponentList(tempList);
// }

// //  use this when yo get to rearranging the components
// function changeIndices(from:number, to:number) {
//     let tempList:Component[] = [...componentList];
//     tempList[from].index = to;

//     // Increse all the indecies between to and from (moved up in array)
//     for (let i = from-1; i >= to; i--) tempList[i].index += 1;

//     // Decrease all the indecies between from and to (moved down in array)
//     for (let i = from+1; i <= to && i < tempList.length; i++) tempList[i].index -= 1;

//     setComponentList(tempList);
// }

function Settings() {

    const state = useSelector((state: RootState) => state.settings);
    const { mode, color, playerData, queueData, playlistData, settingsData, searchData, lyricsData, heardleData, profileData } = state;
    const dispatch = useDispatch();

    return <div
        key="Settings"
        style={ mode ? {
            width: `100%`,
            height: `100%`,
            gridColumn: `span ${settingsData.colSpan}`,
            gridRow: `span ${settingsData.rowSpan}`
        }: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${settingsData.width}px`,
            height: `${settingsData.height}px`,
            transform: `translate(${settingsData.posX}px, ${settingsData.posY}px)`
        }}
        className={`flex ${(mode && settingsData.colSpan < settingsData.rowSpan) || (!mode && settingsData.width < settingsData.height) ? 'flex-col': ''} gap-2 p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-y-scroll transition-all duration-700`}
    >
        <div className='flex flex-col gap-2'>
            <h2 className="text-xl">
                Settings
            </h2>
            <div className="flex justify-center items-center gap-2 text-center">
                <button
                    className={`w-full h-full py-1 text-lg font-semibold bg-${color}-600 rounded-md`}
                    onClick={() => {
                        dispatch(toggleMode());
                        localStorage.setItem('settings', JSON.stringify({...state, mode: !mode}));
                    }}
                >
                    <h2>{mode ? "Snap to Grid" : "Free Form"}</h2>
                </button>
            </div>

            <div className="p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
                <h2 className="mb-2">Color Scheme</h2>
                <div className="flex justify-start items-center gap-2 flex-wrap">
                    <button onClick={() => {dispatch(changeColor("red"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "red"}));}} className="w-5 aspect-square cursor-pointer bg-red-600 rounded-md"/>
                    <button onClick={() => {dispatch(changeColor("orange"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "orange"}));}} className="w-5 aspect-square cursor-pointer bg-orange-600 rounded-md"/>
                    <button onClick={() => {dispatch(changeColor("yellow"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "yellow"}));}} className="w-5 aspect-square cursor-pointer bg-yellow-600 rounded-md"/>
                    <button onClick={() => {dispatch(changeColor("green"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "green"}));}} className="w-5 aspect-square cursor-pointer bg-green-600 rounded-md"/>
                    <button onClick={() => {dispatch(changeColor("sky"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "sky"}));}} className="w-5 aspect-square cursor-pointer bg-sky-600 rounded-md"/>
                    <button onClick={() => {dispatch(changeColor("blue"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "blue"}));}} className="w-5 aspect-square cursor-pointer bg-blue-600 rounded-md"/>
                    <button onClick={() => {dispatch(changeColor("purple"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "purple"}));}} className="w-5 aspect-square cursor-pointer bg-purple-600 rounded-md"/>
                    <button onClick={() => {dispatch(changeColor("pink"));
                        localStorage.setItem('settings', JSON.stringify({...state, color: "pink"}));}} className="w-5 aspect-square cursor-pointer bg-pink-600 rounded-md"/>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Player</h2>
                <div>
                    <input
                        type="checkbox"
                        id="playerComponent"
                        name="playerComponent"
                        value="Player"
                        defaultChecked={playerData.showing}
                        onChange={() => {
                            dispatch(toggleShowing("player"));
                            localStorage.setItem('settings', JSON.stringify({...state, player: {...playerData, showing: !playerData.showing}}));
                        }}
                    />
                    <label htmlFor="playerComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={playerData.colSpan}
                        min={3}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "player", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, player: {...playerData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={playerData.rowSpan}
                        min={1}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "player", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, player: {...playerData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={playerData.width}
                        min={500}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "player", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, player: {...playerData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={playerData.height}
                        min={100}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "player", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, player: {...playerData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Queue</h2>
                <div>
                    <input
                        type="checkbox"
                        id="queueComponent"
                        name="queueComponent"
                        value="Queue"
                        defaultChecked={queueData.showing}
                        onChange={() => {
                            dispatch(toggleShowing("queue"));
                            localStorage.setItem('settings', JSON.stringify({...state, queue: {...queueData, showing: !queueData.showing}}));
                        }}
                    />
                    <label htmlFor="queueComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={queueData.colSpan}
                        min={1}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "queue", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, queue: {...queueData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={queueData.rowSpan}
                        min={2}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "queue", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, queue: {...queueData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={queueData.width}
                        min={200}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "queue", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, queue: {...queueData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={queueData.height}
                        min={200}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "queue", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, queue: {...queueData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Playlists</h2>
                <div>
                    <input
                        type="checkbox"
                        id="playlistComponent"
                        name="playlistComponent"
                        value="Playlist"
                        defaultChecked={playlistData.showing}
                        onChange={() => {
                            dispatch(toggleShowing("playlist"));
                            localStorage.setItem('settings', JSON.stringify({...state, playlist: {...playlistData, showing: !playlistData.showing}}));
                        }}
                    />
                    <label htmlFor="playlistComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={playlistData.colSpan}
                        min={1}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "playlist", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, playlist: {...playlistData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={playlistData.rowSpan}
                        min={2}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "playlist", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, playlist: {...playlistData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={playlistData.width}
                        min={200}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "playlist", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, playlist: {...playlistData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={playlistData.height}
                        min={200}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "playlist", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, playlist: {...playlistData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Search</h2>
                <div>
                    <input
                        type="checkbox"
                        id="searchComponent"
                        name="searchComponent"
                        value="Search"
                        defaultChecked={searchData.showing}
                        onChange={() => {
                            dispatch(toggleShowing("search"));
                            localStorage.setItem('settings', JSON.stringify({...state, search: {...searchData, showing: !searchData.showing}}));
                        }}
                    />
                    <label htmlFor="searchComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={searchData.colSpan}
                        min={2}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "search", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, search: {...searchData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={searchData.rowSpan}
                        min={2}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "search", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, search: {...searchData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={searchData.width}
                        min={400}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "search", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, search: {...searchData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={searchData.height}
                        min={350}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "search", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, search: {...searchData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Lyrics</h2>
                <div>
                    <input
                        type="checkbox"
                        id="lyricsComponent"
                        name="lyricsComponent"
                        value="Lyrics"
                        defaultChecked={lyricsData.showing}
                        onChange={() => {
                            dispatch(toggleShowing("lyrics"));
                            localStorage.setItem('settings', JSON.stringify({...state, lyrics: {...lyricsData, showing: !lyricsData.showing}}));
                        }}
                    />
                    <label htmlFor="lyricsComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={lyricsData.colSpan}
                        min={2}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "lyrics", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, lyrics: {...lyricsData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={lyricsData.rowSpan}
                        min={2}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "lyrics", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, lyrics: {...lyricsData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={lyricsData.width}
                        min={300}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "lyrics", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, lyrics: {...lyricsData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={lyricsData.height}
                        min={200}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "lyrics", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, lyrics: {...lyricsData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Heardle</h2>
                <div>
                    <input
                        type="checkbox"
                        id="heardleComponent"
                        name="heardleComponent"
                        value="Heardle"
                        defaultChecked={heardleData.showing}
                        onChange={() => {
                            dispatch(toggleShowing("heardle"));
                            localStorage.setItem('settings', JSON.stringify({...state, heardle: {...heardleData, showing: !heardleData.showing}}));
                        }}
                    />
                    <label htmlFor="heardleComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={heardleData.colSpan}
                        min={3}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "heardle", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, heardle: {...heardleData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={heardleData.rowSpan}
                        min={2}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "heardle", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, heardle: {...heardleData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={heardleData.width}
                        min={475}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "heardle", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, heardle: {...heardleData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={heardleData.height}
                        min={285}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "heardle", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, heardle: {...heardleData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Profile</h2>
                <div>
                    <input
                        type="checkbox"
                        id="profileComponent"
                        name="profileComponent"
                        value="Profile"
                        defaultChecked={profileData.showing}
                        onChange={() => {
                            dispatch(toggleShowing("profile"));
                            localStorage.setItem('settings', JSON.stringify({...state, profile: {...profileData, showing: !profileData.showing}}));
                        }}
                    />
                    <label htmlFor="profileComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={profileData.colSpan}
                        min={2}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "profile", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, profile: {...profileData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={profileData.rowSpan}
                        min={2}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "profile", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, profile: {...profileData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={profileData.width}
                        min={300}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "profile", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, profile: {...profileData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={profileData.height}
                        min={200}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "profile", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, profile: {...profileData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <h2 className="text-lg">Settings</h2>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${mode ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={settingsData.colSpan}
                        min={100}
                        title="columns"
                        onChange={(e) => {
                            dispatch(changeColSpan({id: "settings", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, settings: {...settingsData, colSpan: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={settingsData.rowSpan}
                        min={100}
                        title="rows"
                        onChange={(e) => {
                            dispatch(changeRowSpan({id: "settings", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, settings: {...settingsData, rowSpan: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!mode ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={settingsData.width}
                        min={175}
                        title="width"
                        onChange={(e) => {
                            dispatch(changeWidth({id: "settings", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, settings: {...settingsData, width: +e.target.value}}));
                        }}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={settingsData.height}
                        min={265}
                        title="height"
                        onChange={(e) => {
                            dispatch(changeHeight({id: "settings", value: +e.target.value}));
                            localStorage.setItem('settings', JSON.stringify({...state, settings: {...settingsData, height: +e.target.value}}));
                        }}
                    />
                </div>
            </div>
        </div>
        
        <div className="flex justify-center items-center gap-2 w-full text-center">
            <button
                className={`w-full h-full px-3 py-1 text-lg font-semibold bg-${color}-600 rounded-md`}
                onClick={signOut}
            >
                <h2>Sign Out</h2>
            </button>
        </div>
    </div>
}

export default Settings;
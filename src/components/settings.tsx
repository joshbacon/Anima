
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

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { toggleMode, changeColor, toggleShowing, changeColSpan, changeRowSpan, changeWidth, changeHeight } from "../state/settingsSlice";

import { signOut } from "../apicontroller";

// TODO: turn these in to redux actions.... I think

// function updateShowing(id:string, isShowing:boolean) {
//     let tempList:Component[] = [...componentList];
//     tempList[tempList.map(c => c.id).indexOf(id)].showing = isShowing;
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

    const { mode, color, player, queue, playlist, settings, search, lyrics, heardle, profile } = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch();

    return <div
        key="Settings"
        className={
            `flex flex-col gap-2 p-3 bg-${color}-600 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-y-scroll ` + 
            ( mode ? `w-full h-full col-span-${settings.colSpan} row-span-${settings.rowSpan}` : `absolute w-[${settings.width}px] h-[${settings.height}px] top-[${settings.posY}px] left-[${settings.posX}px]`)            
        }
    >
        <h2 className="text-xl">
            Settings
        </h2>
        <div className="flex justify-center items-center gap-2 text-center">
            <button
                className={`w-full h-full py-1 text-lg font-semibold bg-${color}-600 rounded-md`}
                onClick={() => dispatch(toggleMode())}
            >
                <h2>{mode ? "Snap to Grid" : "Free Form"}</h2>
            </button>
        </div>

        <div className="p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <h2 className="mb-2">Color Scheme</h2>
            <div className="flex justify-start items-center gap-2 flex-wrap">
                <button onClick={() => dispatch(changeColor("red"))} className="w-5 aspect-square cursor-pointer bg-red-600 rounded-md"/>
                <button onClick={() => dispatch(changeColor("orange"))} className="w-5 aspect-square cursor-pointer bg-orange-600 rounded-md"/>
                <button onClick={() => dispatch(changeColor("yellow"))} className="w-5 aspect-square cursor-pointer bg-yellow-600 rounded-md"/>
                <button onClick={() => dispatch(changeColor("green"))} className="w-5 aspect-square cursor-pointer bg-green-600 rounded-md"/>
                <button onClick={() => dispatch(changeColor("sky"))} className="w-5 aspect-square cursor-pointer bg-sky-600 rounded-md"/>
                <button onClick={() => dispatch(changeColor("blue"))} className="w-5 aspect-square cursor-pointer bg-blue-600 rounded-md"/>
                <button onClick={() => dispatch(changeColor("purple"))} className="w-5 aspect-square cursor-pointer bg-purple-600 rounded-md"/>
                <button onClick={() => dispatch(changeColor("pink"))} className="w-5 aspect-square cursor-pointer bg-pink-600 rounded-md"/>
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
                        defaultChecked={player.showing}
                        onChange={() => dispatch(toggleShowing("player"))}
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
                        value={player.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "player", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={player.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "player", value: +e.target.value}))}}
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
                        value={player.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "player", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={player.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "player", value: +e.target.value}))}}
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
                        defaultChecked={queue.showing}
                        onChange={() => dispatch(toggleShowing("queue"))}
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
                        value={queue.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "queue", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={queue.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "queue", value: +e.target.value}))}}
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
                        value={queue.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "queue", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={queue.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "queue", value: +e.target.value}))}}
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
                        defaultChecked={playlist.showing}
                        onChange={() => dispatch(toggleShowing("playlist"))}
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
                        value={playlist.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "playlist", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={playlist.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "playlist", value: +e.target.value}))}}
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
                        value={playlist.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "playlist", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={playlist.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "playlist", value: +e.target.value}))}}
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
                        defaultChecked={search.showing}
                        onChange={() => dispatch(toggleShowing("search"))}
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
                        value={search.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "search", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={search.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "search", value: +e.target.value}))}}
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
                        value={search.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "search", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={search.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "search", value: +e.target.value}))}}
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
                        defaultChecked={lyrics.showing}
                        onChange={() => dispatch(toggleShowing("lyrics"))}
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
                        value={lyrics.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "lyrics", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={lyrics.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "lyrics", value: +e.target.value}))}}
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
                        value={lyrics.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "lyrics", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={lyrics.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "lyrics", value: +e.target.value}))}}
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
                        defaultChecked={heardle.showing}
                        onChange={() => dispatch(toggleShowing("heardle"))}
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
                        value={heardle.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "heardle", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={heardle.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "heardle", value: +e.target.value}))}}
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
                        value={heardle.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "heardle", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={heardle.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "heardle", value: +e.target.value}))}}
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
                        defaultChecked={profile.showing}
                        onChange={() => dispatch(toggleShowing("profile"))}
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
                        value={profile.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "profile", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={profile.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "profile", value: +e.target.value}))}}
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
                        value={profile.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "profile", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={profile.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "profile", value: +e.target.value}))}}
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
                        value={settings.colSpan}
                        title="columns"
                        onChange={(e) => {dispatch(changeColSpan({id: "settings", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-11 rounded-lg text-center"
                        value={settings.rowSpan}
                        title="rows"
                        onChange={(e) => {dispatch(changeRowSpan({id: "settings", value: +e.target.value}))}}
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
                        value={settings.width}
                        title="width"
                        onChange={(e) => {dispatch(changeWidth({id: "settings", value: +e.target.value}))}}
                    />
                    <h2>x</h2>
                    <input
                        type="number"
                        className="w-14 rounded-lg text-center"
                        value={settings.height}
                        title="height"
                        onChange={(e) => {dispatch(changeHeight({id: "settings", value: +e.target.value}))}}
                    />
                </div>
            </div>
        </div>
        
        <div className="flex justify-center items-center gap-2 w-full text-center">
            <button
                className={`w-full h-full py-1 text-lg font-semibold bg-${color}-600 rounded-md`}
                onClick={signOut}
            >
                <h2>Sign Out</h2>
            </button>
        </div>
    </div>
}

export default Settings;
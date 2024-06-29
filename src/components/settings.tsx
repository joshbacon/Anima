
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

import { useState } from "react";

interface Props {
    snapToGrid: boolean;
    updateCallback: (id:string, isShowing:boolean) => void;
}

function Settings({snapToGrid, updateCallback}: Props) {

    const [snapping, setSnapping] = useState<boolean>(snapToGrid);

    function updateOpenList(id:string, value:boolean) {
        updateCallback(id, value);
    }

    return <div key="Settings" className='flex flex-col gap-2 w-full h-full min-w-fit min-h-fit row-span-3 p-3 bg-pink-800 bg-opacity-50 hover:bg-opacity-70 rounded-2xl overflow-y-scroll'>
        <h2 className="text-xl">
            Settings
        </h2>
        <div className="flex justify-center items-center gap-2 text-center">
            <button
                className='w-full h-full py-1 text-lg font-semibold bg-pink-700 rounded-md'
                onClick={() => setSnapping(!snapping)}
            >
                <h2>{snapping ? "Snap to Grid" : "Free Form"}</h2>
            </button>
        </div>

        <div className="p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <h2 className="mb-2">Color Scheme</h2>
            <div className="flex justify-start items-center gap-2 flex-wrap">
                <div className="w-5 aspect-square cursor-pointer bg-red-600 rounded-md"/>
                <div className="w-5 aspect-square cursor-pointer bg-orange-600 rounded-md"/>
                <div className="w-5 aspect-square cursor-pointer bg-yellow-600 rounded-md"/>
                <div className="w-5 aspect-square cursor-pointer bg-green-600 rounded-md"/>
                <div className="w-5 aspect-square cursor-pointer bg-sky-600 rounded-md"/>
                <div className="w-5 aspect-square cursor-pointer bg-blue-600 rounded-md"/>
                <div className="w-5 aspect-square cursor-pointer bg-purple-600 rounded-md"/>
                <div className="w-5 aspect-square cursor-pointer bg-pink-600 rounded-md"/>
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
                        defaultChecked={true}
                        onChange={(e) => {updateOpenList(e.target.value, e.target.checked)}}
                    />
                    <label htmlFor="playerComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${snapping ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!snapping ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
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
                        defaultChecked={true}
                        onChange={(e) => updateOpenList(e.target.value, e.target.checked)}
                    />
                    <label htmlFor="queueComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${snapping ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!snapping ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
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
                        defaultChecked={true}
                        onChange={(e) => updateOpenList(e.target.value, e.target.checked)}
                    />
                    <label htmlFor="playlistComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${snapping ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!snapping ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
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
                        defaultChecked={true}
                        onChange={(e) => updateOpenList(e.target.value, e.target.checked)}
                    />
                    <label htmlFor="searchComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${snapping ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!snapping ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
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
                        defaultChecked={true}
                        onChange={(e) => updateOpenList(e.target.value, e.target.checked)}
                    />
                    <label htmlFor="lyricsComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${snapping ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!snapping ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
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
                        defaultChecked={true}
                        onChange={(e) => updateOpenList(e.target.value, e.target.checked)}
                    />
                    <label htmlFor="heardleComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${snapping ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!snapping ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 p-2 rounded-lg hover:bg-eigen hover:bg-opacity-30">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <h2 className="text-lg">Stats</h2>
                <div>
                    <input
                        type="checkbox"
                        id="statsComponent"
                        name="statsComponent"
                        value="Stats"
                        defaultChecked={true}
                        onChange={(e) => updateOpenList(e.target.value, e.target.checked)}
                    />
                    <label htmlFor="statsComponent" className="pl-2">Show/Hide</label>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${snapping ? "hidden" : "block"}`} />
                <h2>grid span</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-wrap gap-2 p-2 rounded-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-full bg-eigen bg-opacity-50 ${!snapping ? "hidden" : "block"}`} />
                <h2>width/height</h2>
                <div className="flex gap-1">
                    <input type="text" className="w-11 rounded-lg"/>
                    <h2>x</h2>
                    <input type="text" className="w-11 rounded-lg"/>
                </div>
            </div>
        </div>
    </div>
}

export default Settings;
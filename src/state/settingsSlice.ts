import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ComponentState {
    showing: boolean;
    colSpan: number;
    rowSpan: number;
    width: number;
    height: number;
    posX: number;
    posY: number;
}

const initialPlayer:ComponentState = {
    showing: true,
    colSpan: 4,
    rowSpan: 1,
    width: 820,
    height: 145,
    posX: 12,
    posY: 12
}

const initialQueue:ComponentState = {
    showing: true,
    colSpan: 2,
    rowSpan: 4,
    width: 265,
    height: 615,
    posX: 12,
    posY: 169
}

const initialPlaylist:ComponentState = {
    showing: true,
    colSpan: 2,
    rowSpan: 4,
    width: 500,
    height: 615,
    posX: 844,
    posY: 12
}

const initialSettings:ComponentState = {
    showing: true,
    colSpan: 2,
    rowSpan: 3,
    width: 500,
    height: 301,
    posX: 844,
    posY: 639
}

const initialSearch:ComponentState = {
    showing: true,
    colSpan: 3,
    rowSpan: 3,
    width: 543,
    height: 615,
    posX: 289,
    posY: 169
}

const initialLyrics:ComponentState = {
    showing: false,
    colSpan: 2,
    rowSpan: 3,
    width: 550,
    height: 301,
    posX: 1356,
    posY: 12
}

const initialHeardle:ComponentState = {
    showing: false,
    colSpan: 3,
    rowSpan: 2,
    width: 550,
    height: 301,
    posX: 1356,
    posY: 325
}

const initialProfile:ComponentState = {
    showing: true,
    colSpan: 3,
    rowSpan: 2,
    width: 550,
    height: 301,
    posX: 1356,
    posY: 638
}

interface SettingsState {
    snapToGrid: boolean;
    color: string;
    componentList: string[];
    playerData: ComponentState;
    queueData: ComponentState;
    playlistData: ComponentState;
    settingsData: ComponentState;
    searchData: ComponentState;
    lyricsData: ComponentState;
    heardleData: ComponentState;
    profileData: ComponentState;
}

const initialState:SettingsState = {
    snapToGrid: true,
    color: "purple",
    componentList: [
        'player',
        'queue',
        'playlist',
        'settings',
        'search',
        'lyrics',
        'heardle',
        'profile',
    ],
    playerData: initialPlayer,
    queueData: initialQueue,
    playlistData: initialPlaylist,
    settingsData: initialSettings,
    searchData: initialSearch,
    lyricsData: initialLyrics,
    heardleData: initialHeardle,
    profileData: initialProfile,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleSnapToGrid: (state) => {
            state.snapToGrid = !state.snapToGrid
        },
        changeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
        setListOrder: (state, action: PayloadAction<string[]>) => {
            state.componentList = action.payload;
        },
        changeOrder: (state, action: PayloadAction<{id:string, to:number}>) => {
            let temp = [...state.componentList];
            temp.splice(temp.indexOf(action.payload.id), 1);
            temp.splice(action.payload.to, 0, action.payload.id);
            state.componentList = temp;
        },
        toggleShowing: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case 'player':
                    state.playerData.showing = !state.playerData.showing;
                    break;
                case 'queue':
                    state.queueData.showing = !state.queueData.showing;
                    break;
                case 'playlist':
                    state.playlistData.showing = !state.playlistData.showing;
                    break;
                case 'settings':
                    state.settingsData.showing = !state.settingsData.showing;
                    break;
                case 'search':
                    state.searchData.showing = !state.searchData.showing;
                    break;
                case 'lyrics':
                    state.lyricsData.showing = !state.lyricsData.showing;
                    break;
                case 'heardle':
                    state.heardleData.showing = !state.heardleData.showing;
                    break;
                case 'profile':
                    state.profileData.showing = !state.profileData.showing;
                    break;
            }
        },
        changeColSpan: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.playerData.colSpan = action.payload.value;
                    break;
                case 'queue':
                    state.queueData.colSpan = action.payload.value;
                    break;
                case 'playlist':
                    state.playlistData.colSpan = action.payload.value;
                    break;
                case 'settings':
                    state.settingsData.colSpan = action.payload.value;
                    break;
                case 'search':
                    state.searchData.colSpan = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyricsData.colSpan = action.payload.value;
                    break;
                case 'heardle':
                    state.heardleData.colSpan = action.payload.value;
                    break;
                case 'profile':
                    state.profileData.colSpan = action.payload.value;
                    break;
            }
        },
        changeRowSpan: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.playerData.rowSpan = action.payload.value;
                    break;
                case 'queue':
                    state.queueData.rowSpan = action.payload.value;
                    break;
                case 'playlist':
                    state.playlistData.rowSpan = action.payload.value;
                    break;
                case 'settings':
                    state.settingsData.rowSpan = action.payload.value;
                    break;
                case 'search':
                    state.searchData.rowSpan = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyricsData.rowSpan = action.payload.value;
                    break;
                case 'heardle':
                    state.heardleData.rowSpan = action.payload.value;
                    break;
                case 'profile':
                    state.profileData.rowSpan = action.payload.value;
                    break;
            }
        },
        changeWidth: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.playerData.width = action.payload.value;
                    break;
                case 'queue':
                    state.queueData.width = action.payload.value;
                    break;
                case 'playlist':
                    state.playlistData.width = action.payload.value;
                    break;
                case 'settings':
                    state.settingsData.width = action.payload.value;
                    break;
                case 'search':
                    state.searchData.width = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyricsData.width = action.payload.value;
                    break;
                case 'heardle':
                    state.heardleData.width = action.payload.value;
                    break;
                case 'profile':
                    state.profileData.width = action.payload.value;
                    break;
            }
        },
        changeHeight: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.playerData.height = action.payload.value;
                    break;
                case 'queue':
                    state.queueData.height = action.payload.value;
                    break;
                case 'playlist':
                    state.playlistData.height = action.payload.value;
                    break;
                case 'settings':
                    state.settingsData.height = action.payload.value;
                    break;
                case 'search':
                    state.searchData.height = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyricsData.height = action.payload.value;
                    break;
                case 'heardle':
                    state.heardleData.height = action.payload.value;
                    break;
                case 'profile':
                    state.profileData.height = action.payload.value;
                    break;
            }
        }
    },
});

export async function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('settings')!);
    if (savedSettings) {
        if (!savedSettings.snapToGrid) toggleSnapToGrid();
        changeColor(savedSettings.color);
        setListOrder(savedSettings.componentList);
        if (!savedSettings.playerData.showing) toggleShowing('player');
        if (!savedSettings.queueData.showing) toggleShowing('queue');
        if (!savedSettings.playlistData.showing) toggleShowing('playlist');
        if (!savedSettings.settingsData.showing) toggleShowing('settings');
        if (!savedSettings.searchData.showing) toggleShowing('search');
        if (!savedSettings.lyricsData.showing) toggleShowing('lyrics');
        if (!savedSettings.heardleData.showing) toggleShowing('heardle');
        changeColSpan({id: 'player', value: savedSettings.playerData.colSpan});
        changeColSpan({id: 'queue', value: savedSettings.queueData.colSpan});
        changeColSpan({id: 'playlist', value: savedSettings.playlistData.colSpan});
        changeColSpan({id: 'settings', value: savedSettings.settingsData.colSpan});
        changeColSpan({id: 'search', value: savedSettings.searchData.colSpan});
        changeColSpan({id: 'lyrics', value: savedSettings.lyricsData.colSpan});
        changeColSpan({id: 'heardle', value: savedSettings.heardleData.colSpan});
        changeColSpan({id: 'profile', value: savedSettings.profileData.colSpan});
        changeRowSpan({id: 'player', value: savedSettings.playerData.rowSpan});
        changeRowSpan({id: 'queue', value: savedSettings.queueData.rowSpan});
        changeRowSpan({id: 'playlist', value: savedSettings.playlistData.rowSpan});
        changeRowSpan({id: 'settings', value: savedSettings.settingsData.rowSpan});
        changeRowSpan({id: 'search', value: savedSettings.searchData.rowSpan});
        changeRowSpan({id: 'lyrics', value: savedSettings.lyricsData.rowSpan});
        changeRowSpan({id: 'heardle', value: savedSettings.heardleData.rowSpan});
        changeRowSpan({id: 'profile', value: savedSettings.profileData.rowSpan});
        changeWidth({id: 'player', value: savedSettings.playerData.width});
        changeWidth({id: 'queue', value: savedSettings.queueData.width});
        changeWidth({id: 'playlist', value: savedSettings.playlistData.width});
        changeWidth({id: 'settings', value: savedSettings.settingsData.width});
        changeWidth({id: 'search', value: savedSettings.searchData.width});
        changeWidth({id: 'lyrics', value: savedSettings.lyricsData.width});
        changeWidth({id: 'heardle', value: savedSettings.heardleData.width});
        changeWidth({id: 'profile', value: savedSettings.profileData.width});
        changeHeight({id: 'player', value: savedSettings.playerData.height});
        changeHeight({id: 'queue', value: savedSettings.queueData.height});
        changeHeight({id: 'playlist', value: savedSettings.playlistData.height});
        changeHeight({id: 'settings', value: savedSettings.settingsData.height});
        changeHeight({id: 'search', value: savedSettings.searchData.height});
        changeHeight({id: 'lyrics', value: savedSettings.lyricsData.height});
        changeHeight({id: 'heardle', value: savedSettings.heardleData.height});
        changeHeight({id: 'profile', value: savedSettings.profileData.height});
    }
}

export const {
    toggleSnapToGrid,
    changeColor,
    setListOrder,
    changeOrder,
    toggleShowing,
    changeColSpan,
    changeRowSpan,
    changeWidth,
    changeHeight,
} = settingsSlice.actions;

export default settingsSlice.reducer;
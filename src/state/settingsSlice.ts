import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ComponentState {
    index: number;
    showing: boolean;
    colSpan: number;
    rowSpan: number;
    width: number;
    height: number;
    posX: number;
    posY: number;
}

const initialPlayer:ComponentState = {
    index: 0,
    showing: true,
    colSpan: 4,
    rowSpan: 1,
    width: 820,
    height: 145,
    posX: 12,
    posY: 12
}

const initialQueue:ComponentState = {
    index: 1,
    showing: true,
    colSpan: 2,
    rowSpan: 4,
    width: 265,
    height: 615,
    posX: 12,
    posY: 169
}

const initialPlaylist:ComponentState = {
    index: 2,
    showing: true,
    colSpan: 2,
    rowSpan: 4,
    width: 500,
    height: 615,
    posX: 844,
    posY: 12
}

const initialSettings:ComponentState = {
    index: 3,
    showing: true,
    colSpan: 2,
    rowSpan: 3,
    width: 500,
    height: 301,
    posX: 844,
    posY: 639
}

const initialSearch:ComponentState = {
    index: 4,
    showing: true,
    colSpan: 3,
    rowSpan: 3,
    width: 543,
    height: 615,
    posX: 289,
    posY: 169
}

const initialLyrics:ComponentState = {
    index: 5,
    showing: true,
    colSpan: 2,
    rowSpan: 3,
    width: 550,
    height: 301,
    posX: 1356,
    posY: 12
}

const initialHeardle:ComponentState = {
    index: 6,
    showing: true,
    colSpan: 3,
    rowSpan: 2,
    width: 550,
    height: 301,
    posX: 1356,
    posY: 325
}

const initialProfile:ComponentState = {
    index: 7,
    showing: true,
    colSpan: 3,
    rowSpan: 2,
    width: 550,
    height: 301,
    posX: 1356,
    posY: 638
}

interface SettingsState {
    mode: boolean;
    color: string;
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
    mode: true,
    color: "purple",
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
        toggleMode: (state) => {
            state.mode = !state.mode
        },
        changeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
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

export const {
    toggleMode,
    changeColor,
    toggleShowing,
    changeColSpan,
    changeRowSpan,
    changeWidth,
    changeHeight
} = settingsSlice.actions;

export default settingsSlice.reducer;
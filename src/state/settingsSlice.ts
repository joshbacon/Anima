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
    colSpan: 3,
    rowSpan: 1,
    width: 820,
    height: 145,
    posX: 5,
    posY: 5
}

const initialQueue:ComponentState = {
    index: 1,
    showing: true,
    colSpan: 1,
    rowSpan: 4,
    width: 265,
    height: 615,
    posX: 50,
    posY: 50
}

const initialPlaylist:ComponentState = {
    index: 2,
    showing: true,
    colSpan: 2,
    rowSpan: 4,
    width: 545,
    height: 615,
    posX: 100,
    posY: 100
}

const initialSettings:ComponentState = {
    index: 3,
    showing: true,
    colSpan: 1,
    rowSpan: 3,
    width: 270,
    height: 458,
    posX: 150,
    posY: 150
}

const initialSearch:ComponentState = {
    index: 4,
    showing: true,
    colSpan: 2,
    rowSpan: 3,
    width: 550,
    height: 615,
    posX: 200,
    posY: 200
}

const initialLyrics:ComponentState = {
    index: 5,
    showing: true,
    colSpan: 2,
    rowSpan: 2,
    width: 550,
    height: 301,
    posX: 250,
    posY: 250
}

const initialHeardle:ComponentState = {
    index: 6,
    showing: true,
    colSpan: 2,
    rowSpan: 2,
    width: 550,
    height: 301,
    posX: 300,
    posY: 300
}

const initialProfile:ComponentState = {
    index: 7,
    showing: true,
    colSpan: 2,
    rowSpan: 2,
    width: 550,
    height: 301,
    posX: 350,
    posY: 350
}

interface SettingsState {
    mode: boolean;
    color: string;
    player: ComponentState;
    queue: ComponentState;
    playlist: ComponentState;
    settings: ComponentState;
    search: ComponentState;
    lyrics: ComponentState;
    heardle: ComponentState;
    profile: ComponentState;
}

const initialState:SettingsState = {
    mode: true,
    color: "purple",
    player: initialPlayer,
    queue: initialQueue,
    playlist: initialPlaylist,
    settings: initialSettings,
    search: initialSearch,
    lyrics: initialLyrics,
    heardle: initialHeardle,
    profile: initialProfile,
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
                    state.player.showing = !state.player.showing;
                    break;
                case 'queue':
                    state.player.showing = !state.player.showing;
                    break;
                case 'playlist':
                    state.player.showing = !state.player.showing;
                    break;
                case 'settings':
                    state.player.showing = !state.player.showing;
                    break;
                case 'search':
                    state.player.showing = !state.player.showing;
                    break;
                case 'lyrics':
                    state.player.showing = !state.player.showing;
                    break;
                case 'heardle':
                    state.player.showing = !state.player.showing;
                    break;
                case 'profile':
                    state.player.showing = !state.player.showing;
                    break;
            }
        },
        changeColSpan: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'queue':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'playlist':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'settings':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'search':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'lyrics':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'heardle':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'profile':
                    state.player.colSpan = action.payload.value;
                    break;
            }
        },
        changeRowSpan: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'queue':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'playlist':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'settings':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'search':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'lyrics':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'heardle':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'profile':
                    state.player.rowSpan = action.payload.value;
                    break;
            }
        },
        changeWidth: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.width = action.payload.value;
                    break;
                case 'queue':
                    state.player.width = action.payload.value;
                    break;
                case 'playlist':
                    state.player.width = action.payload.value;
                    break;
                case 'settings':
                    state.player.width = action.payload.value;
                    break;
                case 'search':
                    state.player.width = action.payload.value;
                    break;
                case 'lyrics':
                    state.player.width = action.payload.value;
                    break;
                case 'heardle':
                    state.player.width = action.payload.value;
                    break;
                case 'profile':
                    state.player.width = action.payload.value;
                    break;
            }
        },
        changeHeight: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.height = action.payload.value;
                    break;
                case 'queue':
                    state.player.height = action.payload.value;
                    break;
                case 'playlist':
                    state.player.height = action.payload.value;
                    break;
                case 'settings':
                    state.player.height = action.payload.value;
                    break;
                case 'search':
                    state.player.height = action.payload.value;
                    break;
                case 'lyrics':
                    state.player.height = action.payload.value;
                    break;
                case 'heardle':
                    state.player.height = action.payload.value;
                    break;
                case 'profile':
                    state.player.height = action.payload.value;
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
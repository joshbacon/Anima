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
                    state.queue.showing = !state.queue.showing;
                    break;
                case 'playlist':
                    state.playlist.showing = !state.playlist.showing;
                    break;
                case 'settings':
                    state.settings.showing = !state.settings.showing;
                    break;
                case 'search':
                    state.search.showing = !state.search.showing;
                    break;
                case 'lyrics':
                    state.lyrics.showing = !state.lyrics.showing;
                    break;
                case 'heardle':
                    state.heardle.showing = !state.heardle.showing;
                    break;
                case 'profile':
                    state.profile.showing = !state.profile.showing;
                    break;
            }
        },
        changeColSpan: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.colSpan = action.payload.value;
                    break;
                case 'queue':
                    state.queue.colSpan = action.payload.value;
                    break;
                case 'playlist':
                    state.playlist.colSpan = action.payload.value;
                    break;
                case 'settings':
                    state.settings.colSpan = action.payload.value;
                    break;
                case 'search':
                    state.search.colSpan = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyrics.colSpan = action.payload.value;
                    break;
                case 'heardle':
                    state.heardle.colSpan = action.payload.value;
                    break;
                case 'profile':
                    state.profile.colSpan = action.payload.value;
                    break;
            }
        },
        changeRowSpan: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.rowSpan = action.payload.value;
                    break;
                case 'queue':
                    state.queue.rowSpan = action.payload.value;
                    break;
                case 'playlist':
                    state.playlist.rowSpan = action.payload.value;
                    break;
                case 'settings':
                    state.settings.rowSpan = action.payload.value;
                    break;
                case 'search':
                    state.search.rowSpan = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyrics.rowSpan = action.payload.value;
                    break;
                case 'heardle':
                    state.heardle.rowSpan = action.payload.value;
                    break;
                case 'profile':
                    state.profile.rowSpan = action.payload.value;
                    break;
            }
        },
        changeWidth: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.width = action.payload.value;
                    break;
                case 'queue':
                    state.queue.width = action.payload.value;
                    break;
                case 'playlist':
                    state.playlist.width = action.payload.value;
                    break;
                case 'settings':
                    state.settings.width = action.payload.value;
                    break;
                case 'search':
                    state.search.width = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyrics.width = action.payload.value;
                    break;
                case 'heardle':
                    state.heardle.width = action.payload.value;
                    break;
                case 'profile':
                    state.profile.width = action.payload.value;
                    break;
            }
        },
        changeHeight: (state, action: PayloadAction<{id: string, value: number}>) => {
            switch (action.payload.id) {
                case 'player':
                    state.player.height = action.payload.value;
                    break;
                case 'queue':
                    state.queue.height = action.payload.value;
                    break;
                case 'playlist':
                    state.playlist.height = action.payload.value;
                    break;
                case 'settings':
                    state.settings.height = action.payload.value;
                    break;
                case 'search':
                    state.search.height = action.payload.value;
                    break;
                case 'lyrics':
                    state.lyrics.height = action.payload.value;
                    break;
                case 'heardle':
                    state.heardle.height = action.payload.value;
                    break;
                case 'profile':
                    state.profile.height = action.payload.value;
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
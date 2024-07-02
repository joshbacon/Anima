import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// this isn't working to load in existing settings.... fix it
const existingState:SettingsState = JSON.parse(localStorage.getItem('settings')!);

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
    index: existingState.player.index ?? 0,
    showing: existingState.player.showing ?? true,
    colSpan: existingState.player.colSpan ?? 4,
    rowSpan: existingState.player.rowSpan ?? 1,
    width: existingState.player.width ?? 820,
    height: existingState.player.height ?? 145,
    posX: existingState.player.posX ?? 12,
    posY: existingState.player.posY ?? 12
}

const initialQueue:ComponentState = {
    index: existingState.queue.index ?? 1,
    showing: existingState.queue.showing ?? true,
    colSpan: existingState.queue.colSpan ?? 2,
    rowSpan: existingState.queue.rowSpan ?? 4,
    width: existingState.queue.width ?? 265,
    height: existingState.queue.height ?? 615,
    posX: existingState.queue.posX ?? 12,
    posY: existingState.queue.posY ?? 169
}

const initialPlaylist:ComponentState = {
    index: existingState.playlist.index ?? 2,
    showing: existingState.playlist.showing ?? true,
    colSpan: existingState.playlist.colSpan ?? 2,
    rowSpan: existingState.playlist.rowSpan ?? 4,
    width: existingState.playlist.width ?? 500,
    height: existingState.playlist.height ?? 615,
    posX: existingState.playlist.posX ?? 844,
    posY: existingState.playlist.posY ?? 12
}

const initialSettings:ComponentState = {
    index: existingState.settings.index ?? 3,
    showing: existingState.settings.showing ?? true,
    colSpan: existingState.settings.colSpan ?? 2,
    rowSpan: existingState.settings.rowSpan ?? 3,
    width: existingState.settings.width ?? 500,
    height: existingState.settings.height ?? 301,
    posX: existingState.settings.posX ?? 844,
    posY: existingState.settings.posY ?? 639
}

const initialSearch:ComponentState = {
    index: existingState.search.index ?? 4,
    showing: existingState.search.showing ?? true,
    colSpan: existingState.search.colSpan ?? 3,
    rowSpan: existingState.search.rowSpan ?? 3,
    width: existingState.search.width ?? 543,
    height: existingState.search.height ?? 615,
    posX: existingState.search.posX ?? 289,
    posY: existingState.search.posY ?? 169
}

const initialLyrics:ComponentState = {
    index: existingState.lyrics.index ?? 5,
    showing: existingState.lyrics.showing ?? true,
    colSpan: existingState.lyrics.colSpan ?? 2,
    rowSpan: existingState.lyrics.rowSpan ?? 3,
    width: existingState.lyrics.width ?? 550,
    height: existingState.lyrics.height ?? 301,
    posX: existingState.lyrics.posX ?? 1356,
    posY: existingState.lyrics.posY ?? 12
}

const initialHeardle:ComponentState = {
    index: existingState.heardle.index ?? 6,
    showing: existingState.heardle.showing ?? true,
    colSpan: existingState.heardle.colSpan ?? 3,
    rowSpan: existingState.heardle.rowSpan ?? 2,
    width: existingState.heardle.width ?? 550,
    height: existingState.heardle.height ?? 301,
    posX: existingState.heardle.posX ?? 1356,
    posY: existingState.heardle.posY ?? 325
}

const initialProfile:ComponentState = {
    index: existingState.profile.index ?? 7,
    showing: existingState.profile.showing ?? true,
    colSpan: existingState.profile.colSpan ?? 3,
    rowSpan: existingState.profile.rowSpan ?? 2,
    width: existingState.profile.width ?? 550,
    height: existingState.profile.height ?? 301,
    posX: existingState.profile.posX ?? 1356,
    posY: existingState.profile.posY ?? 638
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
    mode: false,
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
import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './playerSlice';
import profileReducer from './profileSlice';
import settingsReducer from './settingsSlice';
import playlistReducer from './playlistSlice';
import queueReducer from './queueSlice';


// check this out when you need asynchronus actions https://youtu.be/5yEG6GhoJBs?t=1539

export const store = configureStore({
    reducer: {
        player: playerReducer,
        profile: profileReducer,
        settings: settingsReducer,
        playlists: playlistReducer,
        queue: queueReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
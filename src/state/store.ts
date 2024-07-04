import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './profileSlice';
import settingsReducer from './settingsSlice';


// check this out when you need asynchronus actions https://youtu.be/5yEG6GhoJBs?t=1539

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        settings: settingsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
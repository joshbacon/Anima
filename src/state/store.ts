import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from './settingsSlice';


// check this out when you need asynchronus actions

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
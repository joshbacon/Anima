import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TrackData, ImageData } from './interfaces';


interface QueueList {
    queue: TrackData[];
}

const initialState:QueueList = {
    queue: [],
};

const queueSlice = createSlice({
    name: "queue",
    initialState,
    reducers: {
        setQueue: (state, action:PayloadAction<TrackData[]>) => {
            state.queue = action.payload;
        },
    }
});

export const {
    setQueue,
} = queueSlice.actions;

export default queueSlice.reducer;
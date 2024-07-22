import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TrackData, emptyTrack } from './interfaces';


export interface PlayerData {
    track: TrackData;
}

const initialState:PlayerData = {
    track: emptyTrack,
};

const playerSlice = createSlice({
    name: "queue",
    initialState,
    reducers: {
        setCurrentlyPlaying: (state, action:PayloadAction<TrackData>) => {
            state.track = action.payload;
        },
    }
});

export const {
    setCurrentlyPlaying,
} = playerSlice.actions;

export default playerSlice.reducer;
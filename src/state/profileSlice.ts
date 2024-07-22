import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TrackData, ArtistData } from './interfaces';

export interface ProfileState {
    username: string,
    topArtists: ArtistData[],
    topTracks: TrackData[],
}

const initialState:ProfileState = {
    username: "User",
    topArtists: [],
    topTracks: [],
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setTopArtists: (state, action:PayloadAction<ArtistData[]>) => {
            state.topArtists = action.payload;
        },
        setTopTracks: (state, action:PayloadAction<TrackData[]>) => {
            state.topTracks = action.payload;
        },
        changeName: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        }
    }
});

export const {
    setTopArtists,
    setTopTracks,
    changeName,
} = profileSlice.actions;

export default profileSlice.reducer;
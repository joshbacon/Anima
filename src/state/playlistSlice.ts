import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TrackData, PlaylistData, ImageData } from './interfaces';


interface PlaylistList {
    playlists: PlaylistData[];
}

const initialState:PlaylistList = {
    playlists: [],
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setPlaylists: (state, action:PayloadAction<PlaylistData[]>) => {
            state.playlists = action.payload;
        },
    }
});

export const {
    setPlaylists,
} = playlistSlice.actions;

export default playlistSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
    color: string;
}

const initialState:SettingsState = {
    color: "purple"
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        changeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        }
    },
});

export const { changeColor } = settingsSlice.actions;

export default settingsSlice.reducer;
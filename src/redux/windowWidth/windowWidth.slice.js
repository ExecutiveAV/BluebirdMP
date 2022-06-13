import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    windowWidth: 0
};

const windowWidthSlice = createSlice({
    name: 'windowWidth',
    initialState,
    reducers: {
        updateWindowWidth(state, action) {
            state.windowWidth = action.payload;
        }
    }
});

export const { updateWindowWidth } = windowWidthSlice.actions;

export default windowWidthSlice.reducer;
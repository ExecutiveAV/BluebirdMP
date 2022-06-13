import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: false
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        openMenu(state) {
            state.isMenuOpen = true;
        },
        closeMenu(state) {
            state.isMenuOpen = false;
        }
    }
});

export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    portfolioIsOdd: false
};

const portfolioSlicer = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        updatePortfolio(state, action) {
            state.portfolioIsOdd = action.payload;
        }
    }
});

export const { updatePortfolio } = portfolioSlicer.actions;

export default portfolioSlicer.reducer;
import { createSlice } from "@reduxjs/toolkit";

import portraits from "./portraits";
import landscapes from "./landscapes";
import babyphotos from "./babyphotos";

const initialState = {
    portraits: {
        name: "portraits",
        pictures: portraits
    },
    babyphotos: {
        name: "babyphotos",
        pictures: babyphotos
    },
    landscape: {
        name: "landscape",
        pictures: landscapes
    }
};

const categoriesSlicer = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
});


export default categoriesSlicer.reducer;
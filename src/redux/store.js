import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";

const store = configureStore({
    reducer: {
        genre: genreSlice,
    },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import movieListSlice from "./slices/movieListSlice";
import movieDetailSlice from "./slices/movieDetailSlice";

const store = configureStore({
    reducer: {
        genre: genreSlice,
        movieList: movieListSlice,
        movieDetail: movieDetailSlice,
    },
});

export default store;

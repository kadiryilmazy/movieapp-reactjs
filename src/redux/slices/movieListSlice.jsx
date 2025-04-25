import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { API_MOVIE_LIST, API_KEY } from "../../constants/api";

const initialState = {
    movieList: [],
};

export const getMovieList = createAsyncThunk("getMovieList", async () => {
    const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`);
    return res.data.results;
});

const movieListSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.movieList = action.payload;
        });
    },
});

export default movieListSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIE_DETAIL, API_KEY } from "../../constants/api";

const initialState = {
    movieDetail: {},
    status: "idle",
    error: null,
};

export const getMovieDetailById = createAsyncThunk("getMovieDetail", async (id) => {
    try {
        const res = await axios.get(`${API_MOVIE_DETAIL}/${id}?api_key=${API_KEY}`);
        return res.data;
    } catch (error) {
        throw new Error("Film detayları alınamadı.");
    }
});

const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovieDetailById.fulfilled, (state, action) => {
            state.movieDetail = action.payload;
        });
    },
});

export default movieDetailSlice.reducer;

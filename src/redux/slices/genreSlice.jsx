import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GENRE, API_KEY } from "../../constants/api";
const initialState = {
    genres: [],
};

export const getGenres = createAsyncThunk("genre/getGenres", async () => {
    const res = await axios.get(`${API_GENRE}?api_key=${API_KEY}`);
    return res.data.genres;
});

const genreSlice = createSlice({
    name: "genre",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
        });
    },
});

export default genreSlice.reducer;

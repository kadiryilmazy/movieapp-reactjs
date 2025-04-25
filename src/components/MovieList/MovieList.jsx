import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../redux/slices/movieListSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList() {
    const dispatch = useDispatch();
    const { movieList } = useSelector((store) => store.movieList);

    useEffect(() => {
        dispatch(getMovieList());
    }, [dispatch]);

    return (
        <div className="movie-list">
            <ul>
                {movieList &&
                    movieList.map((movie, index) => {
                        return (
                            <MovieCard
                                key={movie.id || index}
                                movie={movie}
                            />
                        );
                    })}
            </ul>
        </div>
    );
}

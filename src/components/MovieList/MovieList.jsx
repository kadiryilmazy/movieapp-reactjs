import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../redux/slices/movieListSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import Loading from "../Loading/Loading";

export default function MovieList() {
    const dispatch = useDispatch();
    const { movieList, isLoading } = useSelector((store) => store.movieList);

    useEffect(() => {
        dispatch(getMovieList());
    }, [dispatch]);

    return (
        <div className="movie-list">
            <ul>
                {isLoading ? (
                    <Loading />
                ) : (
                    movieList &&
                    movieList.map((movie, index) => (
                        <MovieCard
                            key={movie.id || index}
                            movie={movie}
                        />
                    ))
                )}
            </ul>
        </div>
    );
}

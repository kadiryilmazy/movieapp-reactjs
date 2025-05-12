import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, getMovieListByGenre } from "../../redux/slices/movieListSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export default function MovieList({ selectedGenre }) {
    const dispatch = useDispatch();
    const { movieList, status, error } = useSelector((store) => store.movieList);

    useEffect(() => {
        if (!selectedGenre) {
            dispatch(getMovieList());
        } else {
            dispatch(getMovieListByGenre(selectedGenre.id));
        }
    }, [selectedGenre, dispatch]);

    return (
        <div className="movie-list">
            <ul>
                {status === "fulfilled" ? (
                    movieList.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))
                ) : status === "pending" ? (
                    <Loading />
                ) : status === "rejected" ? (
                    <Error error={error} />
                ) : null}
            </ul>
        </div>
    );
}

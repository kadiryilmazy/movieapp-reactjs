import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailById } from "../../redux/slices/movieDetailSlice";

export default function MovieDetail() {
    const { id } = useParams();
    const dispatch = useDispatch(getMovieDetailById);
    const { movieDetail } = useSelector((store) => store.movieDetail);
    const { title, overview, release_date, vote_average, runtime, genres } = movieDetail;
    console.log(movieDetail);

    useEffect(() => {
        dispatch(getMovieDetailById(id));
    }, [id, dispatch]);

    return <div>{title}</div>;
}

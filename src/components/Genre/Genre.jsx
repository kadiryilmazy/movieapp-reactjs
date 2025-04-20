import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/slices/genreSlice";
import "./Genre.css";

export default function Genre() {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genre.genres);
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className="genres">
            <ul>
                {genres &&
                    genres.map((genre, index) => (
                        <li
                            key={index}
                            className="genre-item"
                        >
                            {genre.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/slices/genreSlice";
import "./Genre.css";

export default function Genre({ setSelectedGenre, selectedGenre }) {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genre.genres);

    const handleGenre = (genre) => {
        setSelectedGenre(genre);
    };
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className="genres">
            <ul>
                {Array.isArray(genres) &&
                    genres.map((genre) => (
                        <li
                            key={genre.id}
                            onClick={() => handleGenre(genre)}
                            className={`genre-item ${selectedGenre?.id === genre.id ? "active" : ""}`}
                        >
                            {genre.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

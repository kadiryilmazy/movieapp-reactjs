import React from "react";
import "./movieCard.css";
import { API_IMAGE } from "../../constants/api";

import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { id, title, vote_average, poster_path } = movie;

    return (
        <Link to={`/${id}`}>
            <div className="movie-card">
                <div className="gradient"></div>
                <img
                    src={`${API_IMAGE}/${poster_path}`}
                    alt={title}
                />
                <div className="movie-info">
                    <div className="movie-rating">
                        <p>{vote_average?.toFixed(1)}</p>
                        <FaStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;

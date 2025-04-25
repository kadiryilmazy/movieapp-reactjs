import React from "react";
import Genre from "../../components/Genre/Genre";
import MovieList from "../../components/MovieList/MovieList";
export default function Home() {
    return (
        <div className="home">
            <Genre />
            <MovieList />
        </div>
    );
}
